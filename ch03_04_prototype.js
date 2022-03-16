ch03 04_prototype

// prototype : js에서 상속을 구현하는 개념

function Person() {
     this.name = name
 }

Person.prototype.greet = function greet() {
     return `Hi, ${this.name}!`
 }

function Student(name) {
     this.__proto__.constructor(name)
 }

Student.prototype.study = function study() {
     return `${this.name} is studying.`
 }

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('hhjoo')
 //console.log(me)
 console.log(me.greet())
 console.log(me.study())

console.log(me instanceof Student)    //true
 console.log(me instanceof Person)    //true

const anotherPerson = new Person('Foo')
 console.log(anotherPerson instanceof Student)    //false
 console.log(anotherPerson instanceof Person)    //true

//instanceof : 어떤것으로부터 만들어졌는지 확인함
 //ex) console.log([] instanceof Array, [] instanceof Object)    // true, true

// 모던클래스
 class Person {
     constructor(name) {
         this.name = name
     }
     
     greet() {
         return `Hi, ${this.name}!`
     }
 }

class Student extends Person {
     constructor(name) {
         super(name)
     }
     
     study() {
         return `${this.name} is studying.`
     }
 }

const me = new Student('hhjoo')
 console.log(me.greet())
 console.log(me.study())