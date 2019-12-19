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
    add(key: string, value: any, operator?: string): any;
    get: () => {
        FilterExpression: string;
    } | {
        FilterExpression?: undefined;
    };
};
export default _default;
