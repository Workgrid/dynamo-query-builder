declare const _default: <T extends any>(baseClass: T) => {
    set(num: number): T;
    get: () => {
        Limit: number;
    } | {
        Limit?: undefined;
    };
};
export default _default;
