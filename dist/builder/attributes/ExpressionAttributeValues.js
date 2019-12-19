"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var utils_1 = require("../../utils");
exports.default = (function () {
    var ExpressionAttributeValues = [];
    return {
        add: function (keyName, value) {
            ExpressionAttributeValues.push({ keyName: keyName, value: value });
        },
        get: function () {
            if (ExpressionAttributeValues.length > 0) {
                var formattedObject = {};
                for (var _i = 0, ExpressionAttributeValues_1 = ExpressionAttributeValues; _i < ExpressionAttributeValues_1.length; _i++) {
                    var exp = ExpressionAttributeValues_1[_i];
                    var formattedValue = utils_1.formatValue(__1.getBuilderType(), exp.value);
                    formattedObject[exp.keyName] = formattedValue;
                }
                return {
                    ExpressionAttributeValues: formattedObject
                };
            }
            return {};
        }
    };
});
