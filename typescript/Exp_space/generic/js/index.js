"use strict";
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        this.data = [];
        this.push = function (item) { return _this.data.push(item); };
        this.pop = function () { return _this.data.shift(); };
    }
    return Queue;
}());
var queue = new Queue;
queue.push(0);
// queue.push('131') //不能将String类型传入
console.log(queue.data);
