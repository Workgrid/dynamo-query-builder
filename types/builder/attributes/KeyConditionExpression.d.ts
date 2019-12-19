declare const _default: <T extends any>(baseClass: T, exprAttrValues: {
    add: (keyName: string, value: any) => any;
    get: () => {
        ExpressionAttributeValues: {
            [key: string]: any;
        };
    } | {
        ExpressionAttributeValues?: undefined;
    };
}) => {
    add(key: string, value: any, operator?: string): T;
    get: () => {
        KeyConditionExpression: string;
    } | {
        KeyConditionExpression?: undefined;
    };
};
export default _default;
