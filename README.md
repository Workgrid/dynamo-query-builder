# DynamoDB Query Builder
An abstraction layer for the AWS SDK DynamoDB to construct query parameters for various operations. Supports both DynamoDB and DocumentClient type clients.

## Examples

[See a list of examples here.](examples)

## Supported Dynamo operations

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
| `ReturnConsumedCapacity` | x |
| `ReturnItemCollectionMetrics` | x |
| `ReturnValues` | x |
| `ConsistentRead` | x |
| `ExclusiveStartKey` | x |
| `KeyConditions` | x |
| `ScanIndexForward` | x |
| `Select` | x |
| `ConditionExpression` | x |
| `Segment` | x |
| `TotalSegments` | x |
| ~~`ConditionalOperator`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ConditionalOperator.html) | ~ |
| ~~`AttributeUpdates`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributeUpdates.html) | ~ |
| ~~`QueryFilter`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.QueryFilter.html) | ~ |
| ~~`ScanFilter`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.ScanFilter.html) | ~ |
| ~~`AttributesToGet`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.AttributesToGet.html) | ~ |
| ~~`Expected`~~ - [Legacy](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.Expected.html) | ~ |

## Adding additional functionality

