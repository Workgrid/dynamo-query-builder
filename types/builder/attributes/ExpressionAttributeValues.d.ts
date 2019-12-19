declare const _default: <T extends any>(baseClass: T) => {
    add: (keyName: string, value: any) => T;
    get: () => {
        ExpressionAttributeValues: {
            [key: string]: any;
        };
    } | {
        ExpressionAttributeValues?: undefined;
    };
};
export default _default;
