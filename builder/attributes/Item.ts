import { formatValue } from '../../utils'

export interface IJsonItem {
  [key: string]: any
}

export default <T extends any>(baseClass: T) => {
  const Item: { [key: string]: any } = {}

  return {
    get: () => {
      return { Item }
    },
    set: (itemObject: IJsonItem): T => {
      const keys = Object.keys(itemObject)
      for (const key of keys) {
        const formattedValue = formatValue(baseClass.builderType, itemObject[key])
        Item[key] = formattedValue
      }
      return baseClass
    }
  }
}
