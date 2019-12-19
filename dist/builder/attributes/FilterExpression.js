"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (baseClass, exprAttrValues) {
    var FilterExpression = [];
    return {
        add: function (key, value, operator) {
            var op = operator || '=';
            var filterIndex = ":" + (FilterExpression.length + 1);
            FilterExpression.push(key + " " + op + " " + filterIndex);
            exprAttrValues.add(filterIndex, value);
            return baseClass;
        },
        get: function () {
            if (FilterExpression.length !== 0) {
                return {
                    FilterExpression: FilterExpression.join(' and ')
                };
            }
            return {};
        }
    };
});
