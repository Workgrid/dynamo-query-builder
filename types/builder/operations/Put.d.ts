import QueryBuilder from '..';
export default class extends QueryBuilder {
    setItem: (itemObject: import("../attributes/Item").IJsonItem) => this;
    addCondition: (key: string, value: any, operator?: string) => this;
    addAliasToKey: (keyName: string, aliasName: string) => this;
    generateAliasForKey: (keyName: string) => this;
    getConstructedQuery(): {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        Item: {};
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression: string;
        Item: {};
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        Item: {};
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ExpressionAttributeValues?: undefined;
        ConditionExpression: string;
        Item: {};
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        Item: {};
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ExpressionAttributeValues: {
            [key: string]: string;
        };
        ConditionExpression?: undefined;
        Item: {};
        TableName: string;
    } | {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        Item: {};
        TableName: string;
    } | {
        ExpressionAttributeNames?: undefined;
        ExpressionAttributeValues?: undefined;
        ConditionExpression?: undefined;
        Item: {};
        TableName: string;
    };
}
