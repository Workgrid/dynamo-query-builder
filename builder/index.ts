export enum BuilderType {
  DocumentClient, DynamoDB
}

let queryBuilderType: BuilderType
export const getBuilderType = () => {
  return queryBuilderType || BuilderType.DocumentClient
}

/**
 * DynamoDB DocumentClient query builder helper class
 */
class QueryBuilder {
  protected tableName: string

  constructor(tableName: string, builderType?: BuilderType) {
    if (typeof builderType !== 'undefined') {
      queryBuilderType = builderType
    }

    this.tableName = tableName
  }

  public getConstructedQuery() {
    return {
      TableName: this.tableName
    }
  }
}

export default QueryBuilder
