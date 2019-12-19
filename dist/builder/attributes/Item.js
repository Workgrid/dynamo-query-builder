"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
var utils_1 = require("../../utils");
exports.default = (function () {
    var Item = {};
    return {
        get: function () {
            var formattedObject = {};
            var keys = Object.keys(Item);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var formattedValue = utils_1.formatValue(__1.getBuilderType(), Item[key]);
                formattedObject[key] = formattedValue;
            }
            return { Item: formattedObject };
        },
        set: function (itemObject) {
            Item = itemObject;
            return _this;
        }
    };
});
