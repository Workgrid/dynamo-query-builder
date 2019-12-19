import QueryBuilder from '../';
export default class extends QueryBuilder {
    /** Setters */
    setKeyCondition: (key: string, value: any) => this;
    addKeyProjection: (key: string) => this;
    addConditionExpression: (key: string, value: any, operator?: string) => this;
    addExpressionAttrValue: (keyName: string, value: any) => this;
    addAliasToKey: (keyName: string, aliasName: string) => this;
    /** Public utility function */
    generateAliasForKey: (keyName: string) => string;
    getConstructedQuery(): {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key: {
            [key: string]: any;
        };
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression: string;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeNames?: undefined;
        ProjectionExpression?: undefined;
        Key?: undefined;
        TableName: string;
    };
}
