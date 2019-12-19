"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (exprAttrValues) {
    var adds = [];
    var deletes = [];
    var removes = [];
    var sets = [];
    return {
        add: function (type, keyName, value) {
            var newTransaction = { keyName: keyName, value: value };
            switch (type) {
                case 'ADD':
                    adds.push(newTransaction);
                    break;
                case 'DELETE':
                    deletes.push(newTransaction);
                    break;
                case 'REMOVE':
                    removes.push(newTransaction);
                    break;
                case 'SET':
                    sets.push(newTransaction);
                    break;
            }
            return _this;
        },
        // Looking to clean this up, but the slight differences between the expressions make it difficult
        get: function () {
            var compiledTransactions = [];
            var mappedAdds = adds.map(function (add, index) {
                var transactionIndex = ":Add" + (index + 1);
                exprAttrValues.add(transactionIndex, add.value);
                return add.keyName + " " + transactionIndex;
            });
            if (mappedAdds.length > 0) {
                compiledTransactions.push("ADD " + mappedAdds.join(', '));
            }
            var mappedDeletes = deletes.map(function (del, index) {
                var transactionIndex = ":Delete" + (index + 1);
                exprAttrValues.add(transactionIndex, del.value);
                return del.keyName + " " + transactionIndex;
            });
            if (mappedDeletes.length > 0) {
                compiledTransactions.push("DELETE " + mappedDeletes.join(', '));
            }
            var mappedRemoves = removes.map(function (remove) {
                return remove.keyName;
            });
            if (mappedRemoves.length > 0) {
                compiledTransactions.push("REMOVE " + mappedRemoves.join(', '));
            }
            var mappedSets = sets.map(function (set, index) {
                var transactionIndex = ":Set" + (index + 1);
                exprAttrValues.add(transactionIndex, set.value);
                return set.keyName + " = " + transactionIndex;
            });
            if (mappedSets.length > 0) {
                compiledTransactions.push("SET " + mappedSets.join(', '));
            }
            if (compiledTransactions.length !== 0) {
                return {
                    UpdateExpression: compiledTransactions.join(' ')
                };
            }
            return {};
        }
    };
});
