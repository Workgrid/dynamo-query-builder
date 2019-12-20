import QueryBuilder from '..';
export default class extends QueryBuilder {
    /** Setters */
    addKeyProjection: (key: string) => this;
    addFilterExpression: (key: string, value: any, operator?: string) => this;
    addAliasToKey: (keyName: string, aliasName: string) => this;
    setIndexName: (indexName: string) => this;
    setLimit: (num: number) => this;
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
            [key: string]: string;
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
            [key: string]: string;
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
            [key: string]: string;
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
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
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
            [key: string]: string;
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
            [key: string]: string;
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
            [key: string]: string;
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
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit: number;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        Limit?: undefined;
        IndexName: string;
        FilterExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
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
