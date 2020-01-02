import ExpressionAttributeValues from './ExpressionAttributeValues'
import { Expression } from './ExpressionBuilder'

export default (exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const KeyConditionExpression: Expression[] = []

  return {
    add(expression: Expression) {
      KeyConditionExpression.push(expression)
      for (const expr of expression.values) {
        exprAttrValues.add(expr.alias, expr.value)
      }

      return this
    },

    get: () => {
      if (KeyConditionExpression.length > 0) {
        return {
          KeyConditionExpression: KeyConditionExpression.join(' AND ')
        }
      }
      return {}
    }
  }
}
