"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (baseClass) {
    var Limit;
    return {
        set: function (num) {
            Limit = num;
            return baseClass;
        },
        get: function () {
            if (Limit) {
                return { Limit: Limit };
            }
            return {};
        }
    };
});
