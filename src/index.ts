import { Duration, RemovalPolicy } from 'aws-cdk-lib';
import { BackupProps, ClusterParameterGroup, DatabaseCluster, DatabaseSecret } from 'aws-cdk-lib/aws-docdb';
import {
  InstanceClass,
  InstanceSize,
  InstanceType,
  ISecurityGroup,
  IVpc,
  SecurityGroup,
  SubnetType,
} from 'aws-cdk-lib/aws-ec2';
import { IKey, Key } from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
import { Namer } from 'multi-convention-namer';

export interface DocumentDbProps {
  /**
   * Backup configuration
   * @default {retention:Duration.days(30)}
   */
  readonly backup?: BackupProps;
  /**
   * The identifier for the cluster.
   *
   * @default id.pascal
   */
  readonly dbClusterName?: string;
  /**
   * DeletionProtection
   *
   * @default true
   */
  readonly deletionProtection?: boolean;
  /**
   * Number of DocDB compute instances.
   *
   * @default 1
   */
  readonly instances?: number;
  /**
   * What size/type of boxes should the instances be on?
   *
   * @default InstanceType.of(InstanceClass.R5,InstanceSize.LARGE)
   */
  readonly instanceType?: InstanceType;
  /**
   * Kms Key - you probably want to provide one, but...
   *
   * @default - generate a KMS Key
   */
  readonly kmsKey?: IKey;
  /**
   * Removal Policy - applies to both the actual documentdb and the kms key (if created)
   *
   * @default - passthrough to RETAIN.
   */
  readonly removalPolicy?: RemovalPolicy;
  /**
   * Security group.
   *
   * @default undefined a new security group is created.
   */
  readonly securityGroup?: ISecurityGroup;
  /**
   * Which VPC?
   */
  readonly vpc: IVpc;
}

export class DocumentDb extends Construct {
  public readonly cluster: DatabaseCluster;
  public readonly kmsKey: IKey;
  public readonly secret: DatabaseSecret;
  public readonly securityGroup: ISecurityGroup;

  constructor(scope: Construct, id: Namer, props: DocumentDbProps) {
    super(scope, id.pascal);

    const dbClusterName = props.dbClusterName ?? id.pascal;
    const deletionProtection = props.deletionProtection ?? true;
    const instances = props.instances ?? 1;
    const instanceType = props.instanceType ?? InstanceType.of(InstanceClass.R6G, InstanceSize.LARGE);

    this.kmsKey =
      props.kmsKey ??
      new Key(this, 'KmsKey', {
        description: `aws_docdb ${dbClusterName}`,
        removalPolicy: props.removalPolicy,
      });

    const parameterGroupName = id.addSuffix(['parameter', 'group']);
    const parameterGroup = new ClusterParameterGroup(this, parameterGroupName.pascal, {
      dbClusterParameterGroupName: parameterGroupName.pascal,
      family: 'docdb4.0', // must match the DatabaseCluster below (we are using implicit)
      parameters: {
        audit_logs: 'enabled', // TODO: "enabled"? "true"? or... ???
      },
    });

    this.cluster = new DatabaseCluster(this, 'Database', {
      ...props,
      masterUser: {
        username: 'admin',
        excludeCharacters: ' ;+%{}' + '@\'"`/\\#', // DMS and BASH problem chars. Keep life as easy as possible for aws_dms.
        secretName: id.addSuffix(['admin']).pascal,
      },
      backup: props.backup ?? { retention: Duration.days(30) },
      dbClusterName,
      deletionProtection,
      // engineVersion: '4.0', // while it would be nice to explicitly match this to the ParameterGroup above, it forces a replace of the instances. Implicit looks like a better pattern here.
      instances,
      instanceType,
      kmsKey: this.kmsKey,
      parameterGroup,
      removalPolicy: props.removalPolicy,
      securityGroup: props.securityGroup,
      vpc: props.vpc,
      vpcSubnets: { subnetType: SubnetType.PRIVATE_WITH_NAT }, // AWS does not allow putting DocDBs in public subnets.
    });
    this.securityGroup =
      props.securityGroup || SecurityGroup.fromSecurityGroupId(this, 'SecurityGroup', this.cluster.securityGroupId);

    // Manage the admin password in SecretsManager with monthly auto-rotation.
    this.cluster.addRotationSingleUser();
    this.secret = this.cluster.node.tryFindChild('Secret') as DatabaseSecret;

    // TODO: multi-user support
  }
}
