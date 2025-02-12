'use strict';

// const bigint = 12223233323232323233232323232323232323232323n;
// const sameBigint = BigInt(12223233323232323233232323232323232323232323);

// console.log(typeof (bigint));
// console.log(5n/2n);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);



