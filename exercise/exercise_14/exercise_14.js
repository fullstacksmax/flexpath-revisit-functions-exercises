/**
Exercise 14: Using bind(), call(), and apply()

Problem:

Write a function `greet` that accepts a 'greeting' message and logs it 
along with the person's 'name' (this.name). 

Create an object `user` with a 'name' property. 

Use the Function prototype methods call(), apply(), and bind() 
from the `greet` function to invoke `greet` with `user` as `this` 
and explain the differences.


Helpful Links:

`call` method documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

`apply` method documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

`bind` method documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

 */

const user = {
    name: "max"
}

function greet(greeting) {
    user.name = this.name;
    return `${greeting} ${this.name}`
}

const bound = greet.bind(user)
console.log(greet.call(user,"welcome to my call function"))
console.log(greet.apply(user,["welcome to my apply function"]))
console.log(bound("welcome to my bind function"))

