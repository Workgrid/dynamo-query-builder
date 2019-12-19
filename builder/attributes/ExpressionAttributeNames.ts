import { isEmpty } from '../../utils'

export default () => {
  const ExpressionAttributeNames: { [key: string]: any } = {}

  return {
    add: (keyName: string, aliasName: string) => {
      ExpressionAttributeNames[aliasName] = keyName
      return this
    },

    get: () => {
      if (!isEmpty(ExpressionAttributeNames)) {
        return {
          ExpressionAttributeNames
        }
      }
      return {}
    },

    /** Create a AWS-safe alias from the name of a key */
    generateAliasForKey(keyName: string): string {
      const safeText = keyName.replace(/[^a-zA-Z0-9]/g, '')
      return safeText.startsWith('#') ? safeText : `#${safeText}`
    }
  }
}
