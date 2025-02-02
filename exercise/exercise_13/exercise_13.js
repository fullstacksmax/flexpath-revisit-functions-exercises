/**
Exercise 13: 'this' in Arrow Functions

Problem:

Create an object with a method defined using an arrow function and 
another method using a regular function. 

Inside each method, attempt to access a property of the object using `this`. 

Explain the results. */

let obj = {
    a: 17,
    regular() {
        console.log(this.a)
    },
    arrow: () => {
        console.log(this.a)
    },
}

console.log(obj.regular())
//
try {
    console.log(obj.arrow())
} catch (error) {
    console.log(`function error ${error}`)
}