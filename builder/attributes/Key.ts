import { isEmpty } from '../../utils'

export default () => {
  const Key: { [key: string]: any } = {}

  return {
    get: () => {
      if (!isEmpty(Key)) {
        return { Key }
      }
      return {}
    },
    set: (key: string, value: any) => {
      Key[key] = value
      return this
    }
  }
}
