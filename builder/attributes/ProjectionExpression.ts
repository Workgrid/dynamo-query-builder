export default () => {
  const ProjectionExpression: string[] = []

  return {
    add: (key: string) => {
      ProjectionExpression.push(key)
      return this
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
