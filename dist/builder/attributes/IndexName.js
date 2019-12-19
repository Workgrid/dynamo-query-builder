"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var IndexName;
    return {
        get: function () {
            return { IndexName: IndexName };
        },
        set: function (indexName) {
            IndexName = indexName;
            return _this;
        }
    };
});
