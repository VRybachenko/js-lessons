"use strict";

if (4 === 5) {
    console.log('Ok!')
} else {
    console.log("Error")
}

const num = 50;

if (num < 5) {
    console.log('Error');
} else if (num > 100) {
    console.log('Error too much');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error');

switch (num) {
    case 49:
        console.log("Wrong number!");
        break;
    case 100:
        console.log("Wrong number!");
        break;
    case 50:
        console.log("Correct!");
        break;
    default:
        console.log("Not this time!");
        break;
}

