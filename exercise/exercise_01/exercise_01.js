/**
Exercise 1: Function Declarations vs. Expressions and Hoisting

Problem:

Write code that demonstrates the difference in hoisting behavior between 
function declarations and function expressions. 

Specifically, attempt to call both a function declaration and 
a function expression before they are defined, and explain the results. */

console.log(hello())
console.log(greet)

function hello() {
    console.log('hello world')
}

const greet = hello()


console.log(hello())
console.log(greet)

/** the first console.log(greet) does not work because we have not defined the variable "greet"
 * to be the function hello(), the inverse is true because functions are "hoisted" to the top 
 * which ultimately means they are available to be called on a line that comes prior to its declaration
 */