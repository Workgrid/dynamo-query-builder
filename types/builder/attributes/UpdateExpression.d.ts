export declare type ExpressionType = 'ADD' | 'DELETE' | 'REMOVE' | 'SET';
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
    add: (type: ExpressionType, keyName: string, value?: any) => T;
    get: () => {
        UpdateExpression: string;
    } | {
        UpdateExpression?: undefined;
    };
};
export default _default;
