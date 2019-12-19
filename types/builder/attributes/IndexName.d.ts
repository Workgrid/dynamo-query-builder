declare const _default: <T extends any>(baseClass: T) => {
    get: () => {
        IndexName: string;
    };
    set: (indexName: string) => T;
};
export default _default;
