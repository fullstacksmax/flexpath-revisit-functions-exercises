/**
Exercise 8: Using the Arguments Object

Problem:

Write a function `multiplyAll` that accepts any number of numerical arguments 
and returns their product. 

Use the 'arguments' object to handle an indefinite number of arguments. */

function multiplyAll() {
    let product = 1;
    for(let i in arguments){
        product *= arguments[i]
    }
    return product;
}

console.log(multiplyAll(1,2,3,4,5,6))