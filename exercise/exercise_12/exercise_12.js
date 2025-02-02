/**
Exercise 12: Function Scope and Closures

Problem:

Create a function `createCounter` that returns another function. 

The returned function should increment and return a 'counter' variable 
that is not accessible from the global scope. 

Demonstrate how closures retain access to outer variables. */

function createCounter() {
    let counter = 0
    return function () {
        counter += 1
        return counter;
    };
}

const count1 = createCounter()
console.log(count1())
console.log(count1())
console.log(count1())
console.log(count1())