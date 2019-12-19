declare const _default: <T extends any>(baseClass: T) => {
    add: (keyName: string, aliasName: string) => T;
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
