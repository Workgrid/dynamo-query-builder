# DynamoDB Query Builder
An abstraction layer for the AWS SDK DynamoDB to construct query parameters for various operations. Supports both DynamoDB and DocumentClient type clients.

## Examples

[See a list of examples here.](examples)

## Supported Dynamo operations

| Operation | Supported? |
|-|:-:|
| Get | ✓ |
| Query | ✓ |
| Delete | ✓ |
| Scan | ✓ |
| Update | ✓ |
| Put | ✓ |
| Batch Get | x |
| Batch Write | x |
| Create Set | x |
| Transact Get | x |
| Transact Write | x |

## Supported Dynamo attributes

| Attributes     | Supported? |
|-|:-:|
| `Key` | ✓ |
| `ExpressionAttributeNames` | ✓ |
| `ExpressionAttributeValues` | ✓ |
| `FilterExpression` | ✓ |
| `IndexName` | ✓ |
| `KeyConditionExpression` | ✓ |
| `Limit` | ✓ |
| `Item` | ✓ |
| `ProjectionExpression` | ✓ |
| `UpdateExpression` | ✓ |
| `ConditionExpression` | ✓ |
| `ExclusiveStartKey` | ✓ |
| `ReturnConsumedCapacity` | x |
| `ReturnItemCollectionMetrics` | x |
| `ReturnValues` | x |
| `ConsistentRead` | x |
| `KeyConditions` | x |
| `ScanIndexForward` | x |
| `Select` | x |
| `Segment` | x |
| `TotalSegments` | x |
| ~~`ConditionalOperator`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html) | ~ |
| ~~`AttributeUpdates`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributeUpdates.html) | ~ |
| ~~`QueryFilter`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.QueryFilter.html) | ~ |
| ~~`ScanFilter`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ScanFilter.html) | ~ |
| ~~`AttributesToGet`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html) | ~ |
| ~~`Expected`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html) | ~ |

# Adding additional functionality

## *How to add addition operations?*

> An **operation** would be considered one of the functions that Dynamo provides, such as **Get, Query, Put, Scan, etc**

Examples of existing operations can be found in the [operations](./builder/operations) directory.

Each of these operations are a single class being built up using a selection of **attributes** to make up it's functionality.

For example, the **Get** operation pulls in the following attributes;

 - Key
 - ProjectionExpression
 - ExpressionAttributeNames

This class exposes the **set** attribute functions using *public* access type, while keeping the **get** ones private by keeping them outside of the class entirely.

The **get** attributes are kept private, as they are only exposed and returned all together via the **getConstructedQuery** function.

> Since the `private` and `public` keywords are only honoured in Typescript prior to compilation; when using in a Javascript project, private methods and attributes are visibly and accessable. In order to hide clutter, `internal` tags are used as a workaround for each `private` attribute.

Typically (But up to you), attribute **set** functions are chainable. Chainable function can be setup using the **chainable** utility, so that any attribute can be converted to this style, where it sees fit.

Each attribute's **get** function has been setup to return a spreadable object containing it's attribute(s), so the **getConstructedQuery** function can safely spread each attribute.

Once the operation class has been built, export the class in the [main index file](./index.ts).

***

## *How to add additional attributes?*

> An **attribute** is one of the data objects that are expected to be present in the **parameters** object of an operation.
>
> A list of all **DocumentClient** operation attributes [can be found on the AWS documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html).

Each **attribute** can be constructed in any way you see fit, although, keep in consideration the design principles of the existing attributes in order to ensure consistency of expected behaviour;

  - Modular - Keep each attribute simple and only have functionality that it concerns
  - Isolated - An attribute should be responsible for changing, storing and returning it's own data properties
  - Build property only when accessed - Keep attribute data generic at "rest" and build into Dynamo/Document specific formats **only** when accessed via **get**.

Examples of existing attributes can be found in the [attributes](./builder/attributes) directory.

Typically, attributes consist of a **Add/Set** function and a **Get** function. Although, these can be named anything!

The attribute will modify it's property via the **Add/Set** function, and keep it in a generic state, where it will then be constructed into either DynamoDb or DocumentClient format when accessed via **Get**.

### Shareable attributes

Sometimes, an attribute needs to modify the contents of another attribute.

For example, **KeyConditionExpression** needs to add to **ExpressionAttributeValues**.

In this case, make sure that the **KeyConditionExpression** only accesses and sets the **ExpressionAttributeValues** property through a parameter, and never returns another attribute's property, otherwise we introduce unmaintainable code!

See [KeyConditionExpression](./builder/attributes/KeyConditionExpression.ts) for an example of this parameter passing.

