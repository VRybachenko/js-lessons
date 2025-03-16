'use strict';

const btn = document.querySelector('.btn');
let timerID,
    i = 0;

function myAnimation() {
   const element = document.querySelector('.box');
   let pos = 0;

   const id = setInterval(frame, 10);
   function frame() {
       if(pos == 300) {
           clearInterval(id);
       } else {
           pos++;
           element.style.top = pos + "px";
           element.style.left = pos + "px";
       }
   }
}


btn.addEventListener('click', myAnimation);
//
// // const timerID = setTimeout(function (text) {
// //     console.log(text)
// // }, 2000, "Hello Bro!")
//
//
// function logger() {
//     if (i === 3) {
//         clearInterval(timerID);
//     }
//     console.log("Hello Bro!");
//     i++;
// }
//
// let id = setTimeout(function log() {
//     console.log("Hello Vadym!");
//     id = setTimeout(log, 500);
// }, 500);



