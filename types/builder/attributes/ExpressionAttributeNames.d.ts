declare const _default: () => {
    add: (keyName: string, aliasName: string) => typeof globalThis;
    get: () => {
        ExpressionAttributeNames: {
            [key: string]: any;
        };
    } | {
        ExpressionAttributeNames?: undefined;
    };
    /** Create a AWS-safe alias from the name of a key */
    generateAliasForKey(keyName: string): string;
};
export default _default;
