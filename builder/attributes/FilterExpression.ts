import ExpressionAttributeValues from './ExpressionAttributeValues'

export default (exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const FilterExpression: string[] = []

  return {
    add(key: string, value: any, operator?: string) {
      if (value) {
        const op = operator || '='
        const filterIndex = `:${FilterExpression.length + 1}`

        FilterExpression.push(`${key} ${op} ${filterIndex}`)
        exprAttrValues.add(filterIndex, value)
      } else {
        FilterExpression.push(key)
      }

      return this
    },
    get: () => {
      if (FilterExpression.length !== 0) {
        return {
          FilterExpression: FilterExpression.join(' and ')
        }
      }
      return {}
    }
  }
}
