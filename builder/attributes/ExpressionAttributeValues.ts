import { getBuilderType } from '..'
import { formatValue } from '../../utils'

interface IAttributeValue {
  keyName: string;
  value: any;
}

export default () => {
  const ExpressionAttributeValues: IAttributeValue[] = []

  return {
    add: (keyName: string, value: any) => {
      ExpressionAttributeValues.push({ keyName, value })
    },

    get: () => {
      if (ExpressionAttributeValues.length > 0) {
        const formattedObject: { [key: string]: string } = {}
        for (const exp of ExpressionAttributeValues) {
          const formattedValue = formatValue(getBuilderType(), exp.value)
          formattedObject[exp.keyName] = formattedValue
        }

        return {
          ExpressionAttributeValues: formattedObject
        }
      }
      return {}
    }
  }
}
