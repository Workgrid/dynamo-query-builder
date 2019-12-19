import { BuilderType } from './builder'

// Might want to separate this out to 'formatters' file in future
/** Format a value that is valid for query builder type */
export const formatValue = (builderType: BuilderType, value: any) => {
  switch (builderType) {
    case BuilderType.DynamoDB:
      const type = getType(value)
      return { [type]: value }
    case BuilderType.DocumentClient: // DocumentClient is already good to go, fallthrough
    default:
      return value
  }
}

/** Map a variable to an AWS type */
export const getType = (variable: any) => {
  const variableType = typeof variable
  switch (variableType) {
    case 'boolean': return 'BOOL'
    case 'string': return 'S'
    case 'number': return 'N'
    case 'object': // Special cases
      if (Buffer.isBuffer(variable)) { return 'B' }
    // If none of the above, fallthrough to string
    default: return 'S'
  }
}

/** Simple way to check if the object is empty */
export const isEmpty = (object: object) => {
  return (Object.keys(object).length === 0)
}

/** Create a chainable function out of a void function */
export const chainable = <T extends any[], U>(fn: (...args: T) => void, weeSomething: U) => {
  return (...args: T): U => {
    fn(...args)
    return weeSomething
  }
}
