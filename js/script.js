'use strict';

// let number = 5; debugger
//
// function logNumber() {
//     console.log(number); debugger
// }
//
// number = 6;
// logNumber(); debugger
//
// number = 8;
// logNumber(); debugger

function createCounter() {
    let counter = 0;

    const myFunction = function () { debugger
        counter = counter + 1; debugger
        return counter; debugger
    }

    return myFunction;
}

debugger
const increment = createCounter();
const c1 = increment(); debugger //1
const c2 = increment(); debugger //2
const c3 = increment(); debugger //3

console.log(c1, c2, c3);

{
    let msg = "Hello";
}

console.log(msg); //Error!


for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }

    console.log(num); //Error!
}



