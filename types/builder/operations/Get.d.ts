import QueryBuilder from '..';
export default class extends QueryBuilder {
    /** Expose public functions */
    setKeyCondition: (key: string, value: any) => this;
    addKeyProjection: (key: string) => this;
    addAliasToKey: (keyName: string, aliasName: string) => this;
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
