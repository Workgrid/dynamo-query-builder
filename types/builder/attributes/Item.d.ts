export interface IJsonItem {
    [key: string]: any;
}
declare const _default: <T extends any>(baseClass: T) => {
    get: () => {
        Item: {
            [key: string]: any;
        };
    };
    set: (itemObject: IJsonItem) => T;
};
export default _default;
