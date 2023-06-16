"use strict";

const arr = [1, 22, 13, 66, 38]
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length)

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// })

// arr.pop(); // удалить последний елемент
// arr.push(10); // добавить елемент в массив
//
// console.log(arr)
//
// for (let i = 0; i < 0; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));
