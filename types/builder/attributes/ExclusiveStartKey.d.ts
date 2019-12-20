export interface IStartKey {
    [key: string]: any;
}
declare const _default: () => {
    get: () => {
        ExclusiveStartKey: IStartKey;
    } | {
        ExclusiveStartKey?: undefined;
    };
    set: (startKeys: IStartKey) => typeof globalThis;
};
export default _default;
