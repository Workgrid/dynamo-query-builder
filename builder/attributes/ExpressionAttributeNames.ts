import { isEmpty } from '../../utils'

export default <T extends any>(baseClass: T) => {
  const ExpressionAttributeNames: { [key: string]: any } = {}

  return {
    add: (keyName: string, aliasName: string): T => {
      ExpressionAttributeNames[aliasName] = keyName
      return baseClass
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
