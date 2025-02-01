/**
Exercise 2: Arrow Functions and 'this' Binding

Problem:

Create an object `calculator` with a property 'currentValue' and two methods: 
one using a traditional function and another using an arrow function. 

Both methods increment 'currentValue' by 1. 

Demonstrate how the keyword `this` behaves differently in both methods. */

const calculator = {
    currentValue: 0,
    incrementArrow: () => {
        this.currentValue += 1;
        return this.currentValue;
     },
    
     incrementTraditional() {
        this.currentValue += 1;
        return this.currentValue;
    }
}





// When ready, use code below for testing
console.log(calculator.incrementTraditional()); // Outputs: 1
console.log(calculator.incrementArrow()); // Outputs: NaN
console.log(calculator.currentValue); // Outputs: 1
