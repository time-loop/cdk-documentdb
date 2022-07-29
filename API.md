# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentDb <a name="DocumentDb" id="@time-loop/cdk-documentdb.DocumentDb"></a>

#### Initializers <a name="Initializers" id="@time-loop/cdk-documentdb.DocumentDb.Initializer"></a>

```typescript
import { DocumentDb } from '@time-loop/cdk-documentdb'

new DocumentDb(scope: Construct, id: Namer, props: DocumentDbProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.Initializer.parameter.id">id</a></code> | <code>multi-convention-namer.Namer</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.Initializer.parameter.props">props</a></code> | <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps">DocumentDbProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-documentdb.DocumentDb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-documentdb.DocumentDb.Initializer.parameter.id"></a>

- *Type:* multi-convention-namer.Namer

---

##### `props`<sup>Required</sup> <a name="props" id="@time-loop/cdk-documentdb.DocumentDb.Initializer.parameter.props"></a>

- *Type:* <a href="#@time-loop/cdk-documentdb.DocumentDbProps">DocumentDbProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@time-loop/cdk-documentdb.DocumentDb.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@time-loop/cdk-documentdb.DocumentDb.isConstruct"></a>

```typescript
import { DocumentDb } from '@time-loop/cdk-documentdb'

DocumentDb.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/cdk-documentdb.DocumentDb.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_docdb.DatabaseCluster</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_docdb.DatabaseSecret</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDb.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/cdk-documentdb.DocumentDb.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@time-loop/cdk-documentdb.DocumentDb.property.cluster"></a>

```typescript
public readonly cluster: DatabaseCluster;
```

- *Type:* aws-cdk-lib.aws_docdb.DatabaseCluster

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@time-loop/cdk-documentdb.DocumentDb.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `secret`<sup>Required</sup> <a name="secret" id="@time-loop/cdk-documentdb.DocumentDb.property.secret"></a>

```typescript
public readonly secret: DatabaseSecret;
```

- *Type:* aws-cdk-lib.aws_docdb.DatabaseSecret

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@time-loop/cdk-documentdb.DocumentDb.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---


## Structs <a name="Structs" id="Structs"></a>

### DocumentDbProps <a name="DocumentDbProps" id="@time-loop/cdk-documentdb.DocumentDbProps"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-documentdb.DocumentDbProps.Initializer"></a>

```typescript
import { DocumentDbProps } from '@time-loop/cdk-documentdb'

const documentDbProps: DocumentDbProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Which VPC? |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.backup">backup</a></code> | <code>aws-cdk-lib.aws_docdb.BackupProps</code> | Backup configuration. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.dbClusterName">dbClusterName</a></code> | <code>string</code> | The identifier for the cluster. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | DeletionProtection. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.instances">instances</a></code> | <code>number</code> | Number of DocDB compute instances. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | What size/type of boxes should the instances be on? |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Kms Key - you probably want to provide one, but... |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Removal Policy - applies to both the actual documentdb and the kms key (if created). |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDbProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@time-loop/cdk-documentdb.DocumentDbProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

Which VPC?

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@time-loop/cdk-documentdb.DocumentDbProps.property.backup"></a>

```typescript
public readonly backup: BackupProps;
```

- *Type:* aws-cdk-lib.aws_docdb.BackupProps
- *Default:* {retention:Duration.days(30)}

Backup configuration.

---

##### `dbClusterName`<sup>Optional</sup> <a name="dbClusterName" id="@time-loop/cdk-documentdb.DocumentDbProps.property.dbClusterName"></a>

```typescript
public readonly dbClusterName: string;
```

- *Type:* string
- *Default:* id.pascal

The identifier for the cluster.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@time-loop/cdk-documentdb.DocumentDbProps.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* true

DeletionProtection.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@time-loop/cdk-documentdb.DocumentDbProps.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number
- *Default:* 1

Number of DocDB compute instances.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@time-loop/cdk-documentdb.DocumentDbProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* InstanceType.of(InstanceClass.R5,InstanceSize.LARGE)

What size/type of boxes should the instances be on?

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@time-loop/cdk-documentdb.DocumentDbProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* generate a KMS Key

Kms Key - you probably want to provide one, but...

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@time-loop/cdk-documentdb.DocumentDbProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* passthrough to RETAIN.

Removal Policy - applies to both the actual documentdb and the kms key (if created).

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@time-loop/cdk-documentdb.DocumentDbProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* undefined a new security group is created.

Security group.

---



