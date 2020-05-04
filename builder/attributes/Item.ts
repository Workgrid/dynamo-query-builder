import { getBuilderType } from '../'
import { formatValue } from '../../utils'

export interface IJsonItem {
  [key: string]: any;
}

export default () => {
  let Item: IJsonItem = {}

  return {
    get: () => {
      const formattedObject = {}

      const keys = Object.keys(Item)
      for (const key of keys) {
        const formattedValue = formatValue(getBuilderType(), Item[key])
        formattedObject[key] = formattedValue
      }
      return { Item: formattedObject }
    },
    set: (itemObject: IJsonItem) => {
      Item = itemObject
      return this
    }
  }
}
