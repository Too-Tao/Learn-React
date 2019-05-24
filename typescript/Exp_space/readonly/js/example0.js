"use strict";
//自动推断
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = 'Tao';
        this.lastName = 'Kun';
    }
    Object.defineProperty(Person.prototype, "getFullName", {
        get: function () {
            return this.firstName + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person;
console.log(person.getFullName);
person.firstName = 'qw';
person.getFullName = '123'; //只读
console.log(person.getFullName);
