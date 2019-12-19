"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
exports.default = (function (baseClass) {
    var Item = {};
    return {
        get: function () {
            return { Item: Item };
        },
        set: function (itemObject) {
            var keys = Object.keys(itemObject);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var formattedValue = utils_1.formatValue(baseClass.builderType, itemObject[key]);
                Item[key] = formattedValue;
            }
            return baseClass;
        }
    };
});
