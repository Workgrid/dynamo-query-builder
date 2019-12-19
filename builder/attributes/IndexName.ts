export default <T extends any>(baseClass: T) => {
  let IndexName: string
  return {
    get: () => {
      return { IndexName }
    },
    set: (indexName: string): T => {
      IndexName = indexName
      return baseClass
    }
  }
}
