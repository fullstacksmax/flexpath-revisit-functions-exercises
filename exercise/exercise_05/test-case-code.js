/**
Exercise 5: Immediately Invoked Function Expressions (IIFE)

Problem:

Use an IIFE to create a module called `counterModule` that encapsulates a 
private variable 'count'. 

Expose methods `increment`, `decrement`, and `getValue` to 
manipulate and retrieve the value of 'count'. 

Demonstrate that 'count' is not accessible from the global scope. */
// When ready, use the code below for testing

const counterModule = (function () {
    let count = 0

    return {
     increment: function () {
        count += 1;
    },
     decrement: function () {
        count -= 1;
},
     getValue: function () {
        return count;
    }
}
})()


counterModule.increment();
counterModule.increment();
console.log(counterModule.getValue()); // Outputs: 2

counterModule.decrement();
console.log(counterModule.getValue()); // Outputs: 1

console.log(typeof count); // Outputs: 'undefined'
