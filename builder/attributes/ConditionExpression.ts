import ExpressionAttributeValues from './ExpressionAttributeValues'

export default (exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const ConditionExpression: string[] = []

  return {
    add: (key: string, value?: any, operator?: string) => {
      if (value) {
        const op = operator || '='
        const queryIndex = `:${ConditionExpression.length + 1}`

        ConditionExpression.push(`${key} ${op} ${queryIndex}`)
        exprAttrValues.add(queryIndex, value)
      } else {
        ConditionExpression.push(key)
      }

      return this
    },
    get: () => {
      if (ConditionExpression.length > 0) {
        return {
          ConditionExpression: ConditionExpression.join(' and ')
        }
      }
      return {}
    }
  }
}
