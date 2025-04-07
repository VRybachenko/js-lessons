'use strict';

const now = new Date("2025-04-07");
Date.parse("2025-04-07");

console.log(now.setHours(40));
console.log(now);

/*
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getUTCHours());
*/

// console.log(now.getTimezoneOffset())
// console.log(now.getTime())


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);

