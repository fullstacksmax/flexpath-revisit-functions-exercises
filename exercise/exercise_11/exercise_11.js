/**
 * 
Exercise 11: setTimeout and Closures

Problem:

Using a for loop, schedule console logs of the numbers from 1 to 5 with a 
delay of 1 second between each using setTimeout. 

Explain the issue with closures in this context if you use `var` to declare
your for loop index variable and how to fix it.
 */


for(let i = 1; i <=5; i++){
    setTimeout(() => {
        console.log(`this is i ${i}`)
    }, i * 1000);
}

for(var j = 1; j <=5; j++){
    setTimeout(() => {
        console.log(`this is j ${j}`)
    }, j * 1000);
}

// corrected

for(var k = 1; k <= 5; k++) {
    (function (num) {
        setTimeout(function () {
            console.log(`this is num ${num}`);
        }, num * 1000);
    })(k);
}

//console.log(`this is j ${j}`)


/** since var is function scoped you can access "j" outside of the
 * set timeout block. to fix this you can use let instead.
 */
