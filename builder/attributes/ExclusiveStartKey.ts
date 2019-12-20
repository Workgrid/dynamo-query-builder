import { getBuilderType } from '..'
import { formatValue, isEmpty } from '../../utils'

export interface IStartKey {
  [key: string]: any
}

export default () => {
  let ExclusiveStartKey: { [key: string]: any } = {}

  return {
    get: () => {
      if (!isEmpty(ExclusiveStartKey)) {
        const formattedKeys: IStartKey = {}
        const startKeys = Object.keys(ExclusiveStartKey)
        for (const key of startKeys) {
          formattedKeys[key] = formatValue(getBuilderType(), ExclusiveStartKey[key])
        }
        return { ExclusiveStartKey: formattedKeys }
      } else {
        return {}
      }
    },
    set: (startKeys: IStartKey) => {
      ExclusiveStartKey = startKeys // Overwrite
      return this
    }
  }
}
