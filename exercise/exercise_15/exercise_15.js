/**
Exercise 15: IIFE and Module Pattern

Problem:

Implement a simple module called `stringModule` using an IIFE. 

The module should expose methods `toUpperCase`, 
`toLowerCase`, and `capitalize`, 
operating on a private 'string' variable. 

Demonstrate that the private 'string' cannot be accessed directly. */

const stringModule = (() => {
     let str = "";
     return  {
    toUpperCase: function () {
        return str.toUpperCase();
    },
    set: function (value) {
        str = value;
    },
    toLowerCase: function () {
        return str.toLocaleLowerCase()
    },
    capitalize: function () {
        return str.charAt(0).toUpperCase() + str.slice(1)
         
    }

}

})();

stringModule.set("this is a COOl String")
console.log(stringModule.toUpperCase())
console.log(stringModule.toLowerCase())
console.log(stringModule.capitalize())
console.log(typeof str)
