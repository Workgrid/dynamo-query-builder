import QueryBuilder from '../';
export default class extends QueryBuilder {
    /** Setters */
    addKeyProjection: (key: string) => typeof globalThis;
    addFilterExpression: (key: string, value: any, operator?: string) => typeof globalThis;
    addAliasToKey: (keyName: string, aliasName: string) => typeof globalThis;
    setIndexName: (indexName: string) => typeof globalThis;
    setLimit: (num: number) => typeof globalThis;
    generateAliasForKey: (keyName: string) => string;
    getConstructedQuery(): {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    };
}
