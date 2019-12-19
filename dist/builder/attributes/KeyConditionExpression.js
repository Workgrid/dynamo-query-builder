"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (exprAttrValues) {
    var KeyConditionExpression = [];
    return {
        add: function (key, value, operator) {
            var op = operator || '=';
            var queryIndex = ":" + (KeyConditionExpression.length + 1);
            KeyConditionExpression.push(key + " " + op + " " + queryIndex);
            exprAttrValues.add(queryIndex, value);
            return this;
        },
        get: function () {
            if (KeyConditionExpression.length > 0) {
                return {
                    KeyConditionExpression: KeyConditionExpression.join(' and ')
                };
            }
            return {};
        }
    };
});
