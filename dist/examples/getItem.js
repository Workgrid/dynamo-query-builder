"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var builder = new index_1.ConstructGet('myTable');
var query = builder
    .setKeyCondition('myKey', 55)
    .setKeyCondition('anotherKey', 'stringType')
    .getConstructedQuery();
console.log(query);
