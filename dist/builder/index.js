"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuilderType;
(function (BuilderType) {
    BuilderType[BuilderType["DocumentClient"] = 0] = "DocumentClient";
    BuilderType[BuilderType["DynamoDB"] = 1] = "DynamoDB";
})(BuilderType = exports.BuilderType || (exports.BuilderType = {}));
/**
 * DynamoDB DocumentClient query builder helper class
 */
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(tableName, builderType) {
        console.log(builderType);
        this.builderType = (typeof builderType !== 'undefined') ? builderType : BuilderType.DocumentClient;
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
