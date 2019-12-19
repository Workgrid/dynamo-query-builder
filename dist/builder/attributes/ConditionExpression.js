"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (exprAttrValues) {
    var ConditionExpression = [];
    return {
        add: function (key, value, operator) {
            var op = operator || '=';
            var queryIndex = ":" + (ConditionExpression.length + 1);
            ConditionExpression.push(key + " " + op + " " + queryIndex);
            exprAttrValues.add(queryIndex, value);
            return _this;
        },
        get: function () {
            if (ConditionExpression.length > 0) {
                return {
                    ConditionExpression: ConditionExpression.join(' and ')
                };
            }
            return {};
        }
    };
});
