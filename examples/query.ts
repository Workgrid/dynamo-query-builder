import { Expression } from '../builder/attributes/ExpressionBuilder'
import { OperatorTypes } from '../builder/attributes/ExpressionBuilder/interfaces/OperatorTypes'
import { ConstructQuery } from '../index'
const builder = new ConstructQuery('myTable')

const query = builder
  .addKeyCondition(new Expression().where('name', 'Mark Fulton'))
  .addKeyCondition(new Expression().where('age', OperatorTypes.LESS_THAN, 25))
  .getConstructedQuery()

console.log(query)
