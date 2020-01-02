import { BuilderType } from '../builder'
import { Expression } from '../builder/attributes/ExpressionBuilder'
import { OperatorTypes } from '../builder/attributes/ExpressionBuilder/interfaces/OperatorTypes'
import { ConstructQuery } from '../index'

/**
 * Changes the output format of the query to DynamoDB type
 * i.e: The 'BuilderType.DynamoDB' parameter
 */

const builder = new ConstructQuery('myTable', BuilderType.DynamoDB)

const query = builder
  .addKeyCondition(new Expression().where('name', 'Mark Fulton'))
  .addKeyCondition(new Expression().where('age', OperatorTypes.LESS_THAN, 25))
  .getConstructedQuery()

console.log(query)
