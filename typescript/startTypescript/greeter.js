// interface Person {
//   firstName: string
//   lastName: string
// }
// function greeter(person: Person) {
//   return 'Hello, ' + person.firstName + person.lastName
// }
// let user = { firstName: 'Too', lastName: 'Tao' }
// document.body.innerHTML = greeter(user)
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + person.lastName;
}
var user = new Student("Too", "T", "Tao");
document.body.innerHTML = greeter(user);
