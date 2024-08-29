'use strict';

const arr = [2, 13, 26, 3, 6, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop(); // удалает последний метод массива
// arr.push(10); // добавляет в конец массива число
//
// console.log(arr);

arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);

})

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
for(let value of arr){
    console.log(value);
}
//
// arr[99] = 0;
//
// console.log(arr.length);
// console.log(arr);

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));



