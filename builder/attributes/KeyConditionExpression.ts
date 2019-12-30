import ExpressionAttributeValues from './ExpressionAttributeValues'

export default (exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const KeyConditionExpression: string[] = []

  return {
    add(key: string, value?: any, operator?: string) {
      if (value) {
        const op = operator || '='
        const queryIndex = `:${KeyConditionExpression.length + 1}`

        KeyConditionExpression.push(`${key} ${op} ${queryIndex}`)
        exprAttrValues.add(queryIndex, value)
      } else {
        KeyConditionExpression.push(key)
      }

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
