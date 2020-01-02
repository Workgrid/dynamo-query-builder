import ExpressionAttributeValues from './ExpressionAttributeValues'
import { Expression } from './ExpressionBuilder'

export default (exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const ConditionExpression: Expression[] = []
  return {
    add: (expression: Expression) => {
      ConditionExpression.push(expression)
      for (const expr of expression.values) {
        exprAttrValues.add(expr.alias, expr.value)
      }

      return this
    },
    get: () => {
      if (ConditionExpression.length > 0) {
        return {
          ConditionExpression: ConditionExpression.map((expr) => expr.toString()).join(' AND ')
        }
      }
      return {}
    }
  }
}
