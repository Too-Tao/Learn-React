//自动推断
class Person {
  firstName: string = 'Tao'
  lastName: string = 'Kun'

  get getFullName() {
    return this.firstName + this.lastName
  }
}

let person = new Person

console.log(person.getFullName)
person.firstName = 'qw'
person.getFullName = '123'  //只读
console.log(person.getFullName)