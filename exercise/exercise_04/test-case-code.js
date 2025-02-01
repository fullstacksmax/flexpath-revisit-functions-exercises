/**
Exercise 4: Recursive Function to Flatten Nested Arrays

Problem:

Write a recursive function `flattenArray` that takes a deeply nested array 
and returns a new, flat array containing all the elements. 

Explain the importance of the base case in your recursive function. */

function flattenArray(array) {
    //const shift = array.shift()
    let newarray = []

    const shift = array.shift()
    if(array.length === 0){
        return newarray
    }
    //console.log(array)
    //console.log(array.shift())
    //console.log(array)
    newarray.push(shift)
    //console.log(newarray)
    //console.log(newarray)
    //console.log(array)
    return newarray, flattenArray(array)
}


// When ready, use the code below for testing
const nestedArray = [1, [2, [3, [4]], 5]];
//console.log(nestedArray.length)
//console.log(nestedArray)
console.log(flattenArray(nestedArray)); // Outputs: [1, 2, 3, 4, 5]
