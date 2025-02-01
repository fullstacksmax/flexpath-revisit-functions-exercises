/**
Exercise 3: Using the Function Constructor

Problem:

Use the Function constructor to create a function dynamically that 
computes the factorial of a number. 

The function should be named `dynamicFactorial` and accept a single parameter 'n',
which is an integer. */

const dynamicFactorial = new Function("n",
    `
    fact = 1

    if(n === 0 || n === 1){
    return 1
    }

    else {

    if(n > 1) {
    for(n; n > 0; n--){
    fact *= n;

    }
    
    
}
    else {
    for(n; n < 0; n ++) {
    fact *= n
    }}
    
    return fact
}`
)





// When ready, use code below for testing
console.log(dynamicFactorial)
console.log(dynamicFactorial(-1)); // Outputs: 120
