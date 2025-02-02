/**
Exercise 4: Recursive Function to Flatten Nested Arrays

Problem:

Write a recursive function `flattenArray` that takes a deeply nested array 
and returns a new, flat array containing all the elements. 

Explain the importance of the base case in your recursive function. */

function flattenArray(array) {
    //const shift = array.shift()
    const newarray = [];
    ///console.log('in the function')
(function recurse(currentArray) {
        for(let e of currentArray) {
            if(Array.isArray(e)){
                recurse(e)
            }
            else {
                newarray.push(e)
            }
        }

    })(array)
    return newarray
}
    //console.log(array)
    //console.log(array.shift())
    //console.log(array)
    //console.log(newarray)
    //console.log(newarray)
    //console.log(array)


// When ready, use the code below for testing
const nestedArray = [1, [2, [3, [4]], 5]];
//console.log(nestedArray.length)
//console.log(nestedArray)
console.log(flattenArray(nestedArray)); // Outputs: [1, 2, 3, 4, 5]
