import QueryBuilder from '../';
export default class extends QueryBuilder {
    setItem: (itemObject: import("../attributes/Item").IJsonItem) => typeof globalThis;
    addCondition: (key: string, value: any, operator?: string) => typeof globalThis;
    addAliasToKey: (keyName: string, aliasName: string) => typeof globalThis;
    generateAliasForKey: (keyName: string) => string;
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
