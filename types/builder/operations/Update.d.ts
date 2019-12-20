import QueryBuilder from '..';
export default class extends QueryBuilder {
    /** Setters */
    addUpdateExpression: (type: import("../attributes/UpdateExpression").ExpressionType, keyName: string, value?: any) => this;
    addConditionExpression: (key: string, value: any, operator?: string) => this;
    addAliasToKey: (keyName: string, aliasName: string) => this;
    generateAliasForKey: (keyName: string) => string;
    getConstructedQuery(): {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression: string;
        ExpressionAttributeValues?: undefined;
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression: string;
        ExpressionAttributeValues?: undefined;
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        UpdateExpression: string;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression: string;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        UpdateExpression?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression: string;
        ExpressionAttributeValues?: undefined;
        UpdateExpression?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression: string;
        ExpressionAttributeValues?: undefined;
        UpdateExpression?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ConditionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        UpdateExpression?: undefined;
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ConditionExpression?: undefined;
        ExpressionAttributeValues?: undefined;
        UpdateExpression?: undefined;
        TableName: string;
    };
}
