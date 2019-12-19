export default <T extends any>(baseClass: T) => {
  let Limit: number
  return {
    set(num: number) {
      Limit = num
      return baseClass
    },

    get: () => {
      if (Limit) {
        return { Limit }
      }
      return {}
    }
  }
}
