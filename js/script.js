"use strict";

//const obj = new Object();

const option = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
}

console.log(option.colors.border);
//
// delete option.name;
//
// console.log(option);

for (let key in option) {
    if(typeof (option[key]) === "object") {
        for (let i in option[key]){
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
    }
}

// for (let key of option) {
//     console.log(`Свойство ${key} имеет значение ${option[key]}`);
// }