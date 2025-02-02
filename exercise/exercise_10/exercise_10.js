/**
Exercise 10: Higher-Order Functions and Callbacks

Problem:

Implement a higher-order function `processArray` that takes an array and 
a callback function. 

The function should apply the callback to each element of the array and 
return a new array with the results. 

Use this function to square each element in an array of numbers.
 */

function processArray(arr, callback) {
    let result = []
    
    for(let e of arr) {
        if(Array.isArray(e)) {
            console.log('if')
            console.log(e)
            result.push(...processArray(e, callback))
        }
        else{
            console.log(e)
            console.log('else')
            let transform = callback(e)
            result.push(transform)
            console.log(`result = ${result}`)
        }
    }
    return result
}

let testArr = [1,[2,3],4,5,6,7]

console.log(processArray(testArr,function (num) {
    return num * num;
  }))


