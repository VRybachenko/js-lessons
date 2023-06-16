"use strict";

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

let counter = 0;
for (let key in option) {
    if(typeof (option[key]) === "object") {
        for (let i in option[key]){
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter ++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter ++;
    }
}

console.log(counter)