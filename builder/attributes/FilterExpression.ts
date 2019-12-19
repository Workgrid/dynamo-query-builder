import ExpressionAttributeValues from './ExpressionAttributeValues'

export default <T extends any>(baseClass: T, exprAttrValues: ReturnType<typeof ExpressionAttributeValues>) => {
  const FilterExpression: string[] = []

  return {
    add(key: string, value: any, operator?: string): T {
      const op = operator || '='
      const filterIndex = `:${FilterExpression.length + 1}`

      FilterExpression.push(`${key} ${op} ${filterIndex}`)
      exprAttrValues.add(filterIndex, value)

      return baseClass
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
