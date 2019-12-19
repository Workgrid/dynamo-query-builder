import QueryBuilder from '../';
export default class extends QueryBuilder {
    /** Setters */
    addKeyCondition: (key: string, value: any, operator?: string) => this;
    addKeyProjection: (key: string) => this;
    addFilterExpression: (key: string, value: any, operator?: string) => this;
    addAliasToKey: (keyName: string, aliasName: string) => this;
    generateAliasForKey: (keyName: string) => string;
    getConstructedQuery(): {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression: string;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    } | {
        FilterExpression?: undefined;
        KeyConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        TableName: string;
    };
}
