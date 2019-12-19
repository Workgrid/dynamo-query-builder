"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (baseClass) {
    var IndexName;
    return {
        get: function () {
            return { IndexName: IndexName };
        },
        set: function (indexName) {
            IndexName = indexName;
            return baseClass;
        }
    };
});
