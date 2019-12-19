export default () => {
  let IndexName: string
  return {
    get: () => {
      return { IndexName }
    },
    set: (indexName: string) => {
      IndexName = indexName
      return this
    }
  }
}
