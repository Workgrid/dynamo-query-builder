import QueryBuilder from '../';
export default class extends QueryBuilder {
    /** Expose public functions */
    setKeyCondition: (key: string, value: any) => typeof globalThis;
    addKeyProjection: (key: string) => typeof globalThis;
    addAliasToKey: (keyName: string, aliasName: string) => typeof globalThis;
    /** Public utility function */
    generateAliasForKey: (keyName: string) => string;
    getConstructedQuery(): {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    };
}
