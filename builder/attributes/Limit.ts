export default () => {
  let Limit: number
  return {
    set(num: number) {
      Limit = num
      return this
    },

    get: () => {
      if (Limit) {
        return { Limit }
      }
      return {}
    }
  }
}
