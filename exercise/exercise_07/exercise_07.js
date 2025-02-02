/**
Exercise 7: Default Parameters

Problem:

Create a function `createUser` that accepts two parameters: name and role, 
with role defaulting to the string 'guest' if not provided or if explicitly 
passed as undefined. 

Demonstrate how default parameters work with various argument values, 
including null and undefined. */

function createUser(name, role = "guest") {
    return `hello ${name} your role is ${role}`
}

console.log(createUser("max", "admin"))
console.log(createUser("max"))
console.log(createUser("max", null))
console.log(createUser("max", undefined))
