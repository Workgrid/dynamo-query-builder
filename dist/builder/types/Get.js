"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../"));
var ExpressionAttributeNames_1 = __importDefault(require("../attributes/ExpressionAttributeNames"));
var Key_1 = __importDefault(require("../attributes/Key"));
var ProjectionExpression_1 = __importDefault(require("../attributes/ProjectionExpression"));
/** Attribute modules */
var _a = Key_1.default(this), getKey = _a.get, setKey = _a.set;
var _b = ProjectionExpression_1.default(this), getProjection = _b.get, addProjection = _b.add;
var _c = ExpressionAttributeNames_1.default(this), getAttrNames = _c.get, addAttrName = _c.add, generateAliasForKey = _c.generateAliasForKey;
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** Expose public functions */
        _this.setKeyCondition = setKey;
        _this.addKeyProjection = addProjection;
        _this.addAliasToKey = addAttrName;
        /** Public utility function */
        _this.generateAliasForKey = generateAliasForKey;
        return _this;
    }
    default_1.prototype.getConstructedQuery = function () {
        var query = _super.prototype.getConstructedQuery.call(this);
        return __assign(__assign(__assign(__assign({}, query), getKey()), getProjection()), getAttrNames());
    };
    return default_1;
}(__1.default));
exports.default = default_1;
