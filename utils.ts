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

/** Create a chainable function from a void function */
export const chainable = <T extends any[], U>(fn: (...args: T) => void, weeSomething: U) => {
  return (...args: T): U => {
    fn(...args)
    return weeSomething
  }
}

/** Wrapper function for dynamo operations to concat all results pages */
interface IResultsType { LastEvaluatedKey?: string, [key: string]: any }
export async function getAllPages<T = {}>(func: (token?: string) => Promise<T>): Promise<T> {
  const fullResults: any = {}
  let results: IResultsType = {}
  do {
    results = await func(results.LastEvaluatedKey)
    if (fullResults.Items === undefined) {
      fullResults.Items = results.Items
    } else {
      fullResults.Items = [...results.Items, ...fullResults.Items]
    }
  } while (results.LastEvaluatedKey)
  return fullResults
}
