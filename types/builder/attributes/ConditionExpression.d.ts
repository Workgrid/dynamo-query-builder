declare const _default: (exprAttrValues: {
    add: (keyName: string, value: any) => void;
    get: () => {
        ExpressionAttributeValues: {
            [key: string]: string;
        };
    } | {
        ExpressionAttributeValues?: undefined;
    };
}) => {
    add: (key: string, value: any, operator?: string) => typeof globalThis;
    get: () => {
        ConditionExpression: string;
    } | {
        ConditionExpression?: undefined;
    };
};
export default _default;
