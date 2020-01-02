import { Expression } from '../builder/attributes/ExpressionBuilder'
import { OperatorTypes } from '../builder/attributes/ExpressionBuilder/interfaces/OperatorTypes'
import { ConstructScan } from '../index'

/**
 * Using expressions to build up a more advanced query for a scan operation
 */

const builder = new ConstructScan('myTable')

const query = builder
  .addFilterExpression(
    new Expression().where('myKey', OperatorTypes.GREATER_THAN, 25)

    // By passing another expression into parameters, this becomes a sub-expression
    .and(
      new Expression().whereIn('stringSetKey', ['some', 'values', 'to', 'find'])

      // This does not add a subexpression, but joins the two adjacent expressions via a "OR" statement
      .or()
      .where('anotherKey', OperatorTypes.LESS_THAN, 99)
    )
  )
  .getConstructedQuery()

console.log(query)
