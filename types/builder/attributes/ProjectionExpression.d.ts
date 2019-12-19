declare const _default: <T extends any>(baseClass: T) => {
    add: (key: string) => T;
    get: () => {
        ProjectionExpression: string;
    } | {
        ProjectionExpression?: undefined;
    };
};
export default _default;
