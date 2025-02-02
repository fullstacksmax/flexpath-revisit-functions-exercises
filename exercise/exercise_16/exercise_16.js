/**
Exercise 16: Function Constructors and Prototypes

Problem:

Create a constructor function `Person` that accepts 'name' and 'age'. 

Add a method `introduce` to its prototype that returns a string 
introducing the person. 

Demonstrate how instances share methods through the prototype. */

function Person(name, age) {
    this.name = name;
    this.age = age;
    
}

Person.prototype.introduce = function () {
    return `hello my name is ${this.name} and i am ${this.age} years old`
}

const max = new Person("max", 34)

console.log(max.introduce())
