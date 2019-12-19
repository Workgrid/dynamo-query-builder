"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
exports.default = (function (baseClass) {
    var Key = {};
    return {
        get: function () {
            if (!utils_1.isEmpty(Key)) {
                return { Key: Key };
            }
            return {};
        },
        set: function (key, value) {
            Key[key] = value;
            return baseClass;
        }
    };
});
