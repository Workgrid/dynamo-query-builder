"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () {
    var ProjectionExpression = [];
    return {
        add: function (key) {
            ProjectionExpression.push(key);
            return _this;
        },
        get: function () {
            if (ProjectionExpression.length > 0) {
                return {
                    ProjectionExpression: ProjectionExpression.join(', ')
                };
            }
            return {};
        }
    };
});
