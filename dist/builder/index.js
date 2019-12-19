"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuilderType;
(function (BuilderType) {
    BuilderType[BuilderType["DocumentClient"] = 0] = "DocumentClient";
    BuilderType[BuilderType["DynamoDB"] = 1] = "DynamoDB";
})(BuilderType = exports.BuilderType || (exports.BuilderType = {}));
var queryBuilderType;
exports.getBuilderType = function () {
    return queryBuilderType || BuilderType.DocumentClient;
};
/**
 * DynamoDB DocumentClient query builder helper class
 */
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(tableName, builderType) {
        if (typeof builderType !== 'undefined') {
            queryBuilderType = builderType;
        }
        this.tableName = tableName;
    }
    QueryBuilder.prototype.getConstructedQuery = function () {
        return {
            TableName: this.tableName
        };
    };
    return QueryBuilder;
}());
exports.default = QueryBuilder;
