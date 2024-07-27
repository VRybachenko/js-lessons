'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

// console.log(calc(5, 5))
// console.log(calc(5, 4));
// console.log(calc(5, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret() + 50;
console.log(anotherNum);


const logger = function () {
    console.log("Hello");
};

logger();

const calc = (a, b) => a + b;







