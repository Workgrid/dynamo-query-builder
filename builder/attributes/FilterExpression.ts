import ExpressionAttributeValues from './ExpressionAttributeValues'
import { Expression } from './ExpressionBuilder'

export default (exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const FilterExpression: Expression[] = []

  return {
    add(expression: Expression) {
      FilterExpression.push(expression)
      for (const expr of expression.values) {
        exprAttrValues.add(expr.alias, expr.value)
      }

      return this
    },
    get: () => {
      if (FilterExpression.length !== 0) {
        return {
          FilterExpression: FilterExpression.join(' AND ')
        }
      }
      return {}
    }
  }
}
