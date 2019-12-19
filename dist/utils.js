"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var builder_1 = require("./builder");
// Might want to separate this out to 'formatters' file in future
/** Format a value that is valid for query builder type */
exports.formatValue = function (builderType, value) {
    var _a;
    switch (builderType) {
        case builder_1.BuilderType.DynamoDB:
            var type = exports.getType(value);
            return _a = {}, _a[type] = value, _a;
        default:
            return value; // DocumentClient is already good to go
    }
};
/** Map a variable to an AWS type */
exports.getType = function (variable) {
    var variableType = typeof variable;
    switch (variableType) {
        case 'boolean': return 'BOOL';
        case 'string': return 'S';
        case 'number': return 'N';
        case 'object': // Special cases
            if (Buffer.isBuffer(variable)) {
                return 'B';
            }
        // If none of the above, fallthrough to string
        default: return 'S';
    }
};
/** Simple way to check if the object is empty */
exports.isEmpty = function (object) {
    return (Object.keys(object).length === 0);
};
