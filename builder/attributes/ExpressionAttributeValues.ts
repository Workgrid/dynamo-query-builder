import { formatValue, isEmpty } from '../../utils'

export default <T extends any>(baseClass: T) => {
  const ExpressionAttributeValues: { [key: string]: any } = {}

  return {
    add: (keyName: string, value: any): T => {
      console.log(baseClass)
      const formattedValue = formatValue(baseClass.builderType, value)
      ExpressionAttributeValues[keyName] = formattedValue
      return baseClass
    },

    get: () => {
      if (!isEmpty(ExpressionAttributeValues)) {
        return {
          ExpressionAttributeValues
        }
      }
      return {}
    }
  }
}
