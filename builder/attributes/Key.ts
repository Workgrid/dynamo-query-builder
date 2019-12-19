import { isEmpty } from '../../utils'

export default <T extends any>(baseClass: T) => {
  const Key: { [key: string]: any } = {}

  return {
    get: () => {
      if (!isEmpty(Key)) {
        return { Key }
      }
      return {}
    },
    set: (key: string, value: any): T => {
      Key[key] = value
      return baseClass
    }
  }
}
