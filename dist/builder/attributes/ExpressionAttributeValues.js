"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
exports.default = (function (baseClass) {
    var ExpressionAttributeValues = {};
    return {
        add: function (keyName, value) {
            console.log(baseClass);
            var formattedValue = utils_1.formatValue(baseClass.builderType, value);
            ExpressionAttributeValues[keyName] = formattedValue;
            return baseClass;
        },
        get: function () {
            if (!utils_1.isEmpty(ExpressionAttributeValues)) {
                return {
                    ExpressionAttributeValues: ExpressionAttributeValues
                };
            }
            return {};
        }
    };
});
