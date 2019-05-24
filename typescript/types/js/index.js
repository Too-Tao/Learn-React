"use strict";
var num = -1;
var str = '123';
var bool = true;
var arr = ['1', '123', '123'];
var u = undefined;
var n = null;
//元组
var x = [123, 'TJ'];
x[0] = 991.231231;
x[1] = 'hh131';
x[0].toFixed(2);
x[1].slice(1);
//枚举
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days[0] === 'Sun'); //true
console.log(Days['Sun'] === 0); //true
//any 表示没有任何类型
//never 永不存在值的类型
//void 返回值为空
//Object 非原始类型
// console.log(x[0].toFixed(2))
