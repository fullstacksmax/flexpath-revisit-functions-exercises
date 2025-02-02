/**
Exercise 9: Rest Parameters

Problem:

Rewrite the `multiplyAll` function from Exercise 8 using 
rest parameters instead of the arguments object.
 */

function multiplyAll(...arg){
    let product = 1
    for(let arg in arguments){
        product *= arguments[arg]
    }
    return product
}


console.log(multiplyAll(1,2,3,4,5,6))