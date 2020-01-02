export default () => {
  let IndexName: string
  return {
    get: () => {
      if (IndexName) {
        return { IndexName }
      } else {
        return {}
      }
    },
    set: (indexName: string) => {
      IndexName = indexName
      return this
    }
  }
}
