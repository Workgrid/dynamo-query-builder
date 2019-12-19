"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
exports.default = (function () {
    var ExpressionAttributeNames = {};
    return {
        add: function (keyName, aliasName) {
            ExpressionAttributeNames[aliasName] = keyName;
            return _this;
        },
        get: function () {
            if (!utils_1.isEmpty(ExpressionAttributeNames)) {
                return {
                    ExpressionAttributeNames: ExpressionAttributeNames
                };
            }
            return {};
        },
        /** Create a AWS-safe alias from the name of a key */
        generateAliasForKey: function (keyName) {
            var safeText = keyName.replace(/[^a-zA-Z0-9]/g, '');
            return safeText.startsWith('#') ? safeText : "#" + safeText;
        }
    };
});
