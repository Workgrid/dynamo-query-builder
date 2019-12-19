"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var builder = new index_1.ConstructQuery('myTable');
var query = builder
    .addKeyCondition('name', 'Mark')
    .addKeyCondition('age', 50, '<') // age < 25
    .getConstructedQuery();
console.log(query);
