import { App, assertions, CfnElement, Duration, Resource, Stack } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType, Vpc, SecurityGroup } from 'aws-cdk-lib/aws-ec2';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Namer } from 'multi-convention-namer';

import { DocumentDB } from '../src';

export function getLogicalId(resource: Resource): string {
  return resource.stack.getLogicalId(resource.node.defaultChild as CfnElement);
}

describe('DocumentDB', () => {
  describe('default', () => {
    const app = new App();
    const stack = new Stack(app, 'Stack');
    const vpc = new Vpc(stack, 'Vpc');
    new DocumentDB(stack, new Namer(['test']), {
      vpc,
    });
    const template = assertions.Template.fromStack(stack);

    it('creates resources', () => {
      [
        'AWS::DocDB::DBCluster',
        'AWS::DocDB::DBClusterParameterGroup',
        'AWS::DocDB::DBInstance',
        'AWS::KMS::Key',
        'AWS::SecretsManager::Secret',
      ].forEach((r) => template.resourceCountIs(r, 1));

      ['AWS::EC2::SecurityGroup'].forEach((r) => template.resourceCountIs(r, 2));
    });

    it('backup defaults to 30 day retention', () => {
      template.hasResourceProperties('AWS::DocDB::DBCluster', { BackupRetentionPeriod: 30 });
    });

    it('dbClusterName defaults to id.pascal', () => {
      template.hasResourceProperties('AWS::DocDB::DBCluster', { DBClusterIdentifier: 'Test' });
    });

    it('deletionProtection defaults to true', () => {
      template.hasResourceProperties('AWS::DocDB::DBCluster', { DeletionProtection: true });
    });

    // it.todo('instances'); // Tested by creates resources above

    it('instanceType defaults to db.r6g.large', () => {
      template.hasResourceProperties('AWS::DocDB::DBInstance', { DBInstanceClass: 'db.r6g.large' });
    });

    // it.todo('kmsKey'); // Tested by creates resources above
    // it('removalPolicy', () => { // TODO: figure out how to test non-properties.
    //   template.hasResourceProperties('AWS::DocDB::DBCluster', { DeletionPolicy: "Retain" });
    // });
    // it.todo('securityGroup'); // Tested by creates resources above
  });

  describe('options', () => {
    let app: App;
    let stack: Stack;
    let vpc: Vpc;

    beforeEach(() => {
      app = new App();
      stack = new Stack(app, 'Test');
      vpc = new Vpc(stack, 'Vpc');
    });

    it('backup is configurable', () => {
      new DocumentDB(stack, new Namer(['test']), { backup: { retention: Duration.days(5) }, vpc });
      const template = assertions.Template.fromStack(stack);
      template.hasResourceProperties('AWS::DocDB::DBCluster', { BackupRetentionPeriod: 5 });
    });

    it('dbClusterName is configurable', () => {
      new DocumentDB(stack, new Namer(['test']), { dbClusterName: 'DifferentName', vpc });
      const template = assertions.Template.fromStack(stack);
      template.hasResourceProperties('AWS::DocDB::DBCluster', { DBClusterIdentifier: 'DifferentName' });
    });

    it('deletionProtection is configurable', () => {
      new DocumentDB(stack, new Namer(['test']), { deletionProtection: false, vpc });
      const template = assertions.Template.fromStack(stack);
      template.hasResourceProperties('AWS::DocDB::DBCluster', { DeletionProtection: false });
    });

    it('instances is configurable', () => {
      new DocumentDB(stack, new Namer(['test']), { instances: 25, vpc });
      const template = assertions.Template.fromStack(stack);
      template.resourceCountIs('AWS::DocDB::DBInstance', 25);
    });

    it('instanceType is configurable', () => {
      new DocumentDB(stack, new Namer(['test']), {
        instanceType: InstanceType.of(InstanceClass.R5, InstanceSize.XLARGE18),
        vpc,
      });
      const template = assertions.Template.fromStack(stack);
      template.hasResourceProperties('AWS::DocDB::DBInstance', { DBInstanceClass: 'db.r5.18xlarge' });
    });

    it('kmsKey is configurable', () => {
      const kmsKey = new Key(stack, 'Key');
      new DocumentDB(stack, new Namer(['test']), { kmsKey, vpc });
      const template = assertions.Template.fromStack(stack);
      template.hasResourceProperties('AWS::DocDB::DBCluster', {
        KmsKeyId: { 'Fn::GetAtt': [getLogicalId(kmsKey), 'Arn'] },
      });
    });

    it('securityGroup is configurable', () => {
      const securityGroup = new SecurityGroup(stack, 'SecurityGroup', { vpc });
      new DocumentDB(stack, new Namer(['test']), { securityGroup, vpc });
      const template = assertions.Template.fromStack(stack);
      template.hasResourceProperties('AWS::DocDB::DBCluster', {
        VpcSecurityGroupIds: [{ 'Fn::GetAtt': [getLogicalId(securityGroup), 'GroupId'] }],
      });
    });
  });
});
