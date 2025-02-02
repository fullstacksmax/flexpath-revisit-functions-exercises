/**
Exercise 17: 'arguments' Object in Arrow Functions

Problem:

Demonstrate how the `arguments` object behaves differently in 
regular functions versus arrow functions by writing a 
function `compareArguments` that logs the `arguments` object in both cases. */

function regular(x){
    
    return arguments

}

const arrow = (() => {
    try {
       console.log(arguments) 
    } catch (error) {
        console.log(`error returning arguments ${error}`)
    }
})

function compareArguments(a,b) {
    for(let i = 0; i <= arguments.length -1; i ++){
        console.log(arguments[i])
    }
}
const reg = regular(1,2,3)
compareArguments(reg, arrow(4,5,7))

//console.log(regular(14))
//console.log(arrow)