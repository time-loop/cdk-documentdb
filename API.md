[![codecov](https://codecov.io/gh/time-loop/cdk-documentdb/branch/main/graph/badge.svg?token=tcF5AmOusa)](https://codecov.io/gh/time-loop/cdk-documentdb)

# cdk-documentdb
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentDB <a name="DocumentDB" id="@time-loop/cdk-documentdb.DocumentDB"></a>

#### Initializers <a name="Initializers" id="@time-loop/cdk-documentdb.DocumentDB.Initializer"></a>

```typescript
import { DocumentDB } from '@time-loop/cdk-documentdb'

new DocumentDB(scope: Construct, id: Namer, props: DocumentDBProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.Initializer.parameter.id">id</a></code> | <code>multi-convention-namer.Namer</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.Initializer.parameter.props">props</a></code> | <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps">DocumentDBProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-documentdb.DocumentDB.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-documentdb.DocumentDB.Initializer.parameter.id"></a>

- *Type:* multi-convention-namer.Namer

---

##### `props`<sup>Required</sup> <a name="props" id="@time-loop/cdk-documentdb.DocumentDB.Initializer.parameter.props"></a>

- *Type:* <a href="#@time-loop/cdk-documentdb.DocumentDBProps">DocumentDBProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@time-loop/cdk-documentdb.DocumentDB.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@time-loop/cdk-documentdb.DocumentDB.isConstruct"></a>

```typescript
import { DocumentDB } from '@time-loop/cdk-documentdb'

DocumentDB.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/cdk-documentdb.DocumentDB.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_docdb.DatabaseCluster</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_docdb.DatabaseSecret</code> | *No description.* |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDB.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/cdk-documentdb.DocumentDB.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@time-loop/cdk-documentdb.DocumentDB.property.cluster"></a>

```typescript
public readonly cluster: DatabaseCluster;
```

- *Type:* aws-cdk-lib.aws_docdb.DatabaseCluster

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@time-loop/cdk-documentdb.DocumentDB.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

---

##### `secret`<sup>Required</sup> <a name="secret" id="@time-loop/cdk-documentdb.DocumentDB.property.secret"></a>

```typescript
public readonly secret: DatabaseSecret;
```

- *Type:* aws-cdk-lib.aws_docdb.DatabaseSecret

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@time-loop/cdk-documentdb.DocumentDB.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

---


## Structs <a name="Structs" id="Structs"></a>

### DocumentDBProps <a name="DocumentDBProps" id="@time-loop/cdk-documentdb.DocumentDBProps"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-documentdb.DocumentDBProps.Initializer"></a>

```typescript
import { DocumentDBProps } from '@time-loop/cdk-documentdb'

const documentDBProps: DocumentDBProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Which VPC? |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.backup">backup</a></code> | <code>aws-cdk-lib.aws_docdb.BackupProps</code> | Backup configuration. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.dbClusterName">dbClusterName</a></code> | <code>string</code> | The identifier for the cluster. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.deletionProtection">deletionProtection</a></code> | <code>boolean</code> | DeletionProtection. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.instances">instances</a></code> | <code>number</code> | Number of DocDB compute instances. |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.instanceType">instanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | What size/type of boxes should the instances be on? |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.kmsKey">kmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Kms Key - you probably want to provide one, but... |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Removal Policy - applies to both the actual documentdb and the kms key (if created). |
| <code><a href="#@time-loop/cdk-documentdb.DocumentDBProps.property.securityGroup">securityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | Security group. |

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@time-loop/cdk-documentdb.DocumentDBProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

Which VPC?

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@time-loop/cdk-documentdb.DocumentDBProps.property.backup"></a>

```typescript
public readonly backup: BackupProps;
```

- *Type:* aws-cdk-lib.aws_docdb.BackupProps
- *Default:* {retention:Duration.days(30)}

Backup configuration.

---

##### `dbClusterName`<sup>Optional</sup> <a name="dbClusterName" id="@time-loop/cdk-documentdb.DocumentDBProps.property.dbClusterName"></a>

```typescript
public readonly dbClusterName: string;
```

- *Type:* string
- *Default:* id.pascal

The identifier for the cluster.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@time-loop/cdk-documentdb.DocumentDBProps.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean;
```

- *Type:* boolean
- *Default:* true

DeletionProtection.

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@time-loop/cdk-documentdb.DocumentDBProps.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number
- *Default:* 1

Number of DocDB compute instances.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@time-loop/cdk-documentdb.DocumentDBProps.property.instanceType"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType
- *Default:* InstanceType.of(InstanceClass.R5,InstanceSize.LARGE)

What size/type of boxes should the instances be on?

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@time-loop/cdk-documentdb.DocumentDBProps.property.kmsKey"></a>

```typescript
public readonly kmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* generate a KMS Key

Kms Key - you probably want to provide one, but...

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@time-loop/cdk-documentdb.DocumentDBProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* passthrough to RETAIN.

Removal Policy - applies to both the actual documentdb and the kms key (if created).

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@time-loop/cdk-documentdb.DocumentDBProps.property.securityGroup"></a>

```typescript
public readonly securityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup
- *Default:* undefined a new security group is created.

Security group.

---



