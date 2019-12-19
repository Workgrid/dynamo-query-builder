declare const _default: <T extends any>(baseClass: T) => {
    get: () => {
        Key: {
            [key: string]: any;
        };
    } | {
        Key?: undefined;
    };
    set: (key: string, value: any) => T;
};
export default _default;
