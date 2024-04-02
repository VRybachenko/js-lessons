"use strict";

const arr = ["a", "b", "c"];
arr[10] = "1234";
console.log(arr)

const arrObj = {
    0: "a",
    1: "b",
    2: "c",
    abc: {
        def: {

        }
    }
}

arrObj.b = "1234";
arrObj["b"] = "1234"

console.log(arrObj.b);