"use strict";
var foo = { name: 'Tom', value: 123 };
var fooReadonly = { name: 'Bob', value: 12333 };
foo.name = 'Jery';
console.log(foo);
console.log(fooReadonly);
