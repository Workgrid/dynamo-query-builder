export enum BuilderType {
  DocumentClient, DynamoDB
}

/**
 * DynamoDB DocumentClient query builder helper class
 */

class QueryBuilder {
  protected builderType: BuilderType // TODO: ExpressionValues need to change
  protected tableName: string

  constructor(tableName: string, builderType?: BuilderType) {
    console.log(builderType)
    this.builderType = (typeof builderType !== 'undefined') ? builderType : BuilderType.DocumentClient
    this.tableName = tableName
  }

  public getConstructedQuery() {
    return {
      TableName: this.tableName
    }
  }
}

export default QueryBuilder
