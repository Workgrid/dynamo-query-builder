"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (baseClass) {
    var ProjectionExpression = [];
    return {
        add: function (key) {
            ProjectionExpression.push(key);
            return baseClass;
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
