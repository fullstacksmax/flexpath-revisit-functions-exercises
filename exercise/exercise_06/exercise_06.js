/**
Exercise 6: Pass-by-Value vs. Pass-by-Reference

Problem:

Write a function `modifyValues` that attempts to modify a number and 
an object passed to it. 

Demonstrate how primitives and objects are handled differently 
when passed as arguments to a function.

*/

function modifyValues(x, obj) {
    x += 1;
    obj.max += 1;
}

let x = 4
let obj = {
    max: 1
}

modifyValues(x, obj)

console.log(x)
console.log(obj)

