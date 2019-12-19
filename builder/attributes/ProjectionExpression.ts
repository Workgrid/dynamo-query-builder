export default <T extends any>(baseClass: T) => {
  const ProjectionExpression: string[] = []

  return {
    add: (key: string): T => {
      ProjectionExpression.push(key)
      return baseClass
    },
    get: () => {
      if (ProjectionExpression.length > 0) {
        return {
          ProjectionExpression: ProjectionExpression.join(', ')
        }
      }
      return {}
    }
  }
}
