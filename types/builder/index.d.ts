export declare enum BuilderType {
    DocumentClient = 0,
    DynamoDB = 1
}
export declare const getBuilderType: () => BuilderType;
/**
 * DynamoDB DocumentClient query builder helper class
 */
declare class QueryBuilder {
    protected tableName: string;
    constructor(tableName: string, builderType?: BuilderType);
    getConstructedQuery(): {
        TableName: string;
    };
}
export default QueryBuilder;
