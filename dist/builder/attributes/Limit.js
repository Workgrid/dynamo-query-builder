"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var Limit;
    return {
        set: function (num) {
            Limit = num;
            return this;
        },
        get: function () {
            if (Limit) {
                return { Limit: Limit };
            }
            return {};
        }
    };
});
