export declare type ExpressionType = 'ADD' | 'DELETE' | 'REMOVE' | 'SET';
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
    add: (type: ExpressionType, keyName: string, value?: any) => typeof globalThis;
    get: () => {
        UpdateExpression: string;
    } | {
        UpdateExpression?: undefined;
    };
};
export default _default;
