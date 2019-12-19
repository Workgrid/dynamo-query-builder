import ExpressionAttributeValues from './ExpressionAttributeValues'

export default (exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const KeyConditionExpression: string[] = []

  return {
    add(key: string, value: any, operator?: string) {
      const op = operator || '='
      const queryIndex = `:${KeyConditionExpression.length + 1}`

      KeyConditionExpression.push(`${key} ${op} ${queryIndex}`)
      exprAttrValues.add(queryIndex, value)

      return this
    },

    get: () => {
      if (KeyConditionExpression.length > 0) {
        return {
          KeyConditionExpression: KeyConditionExpression.join(' and ')
        }
      }
      return {}
    }
  }
}
