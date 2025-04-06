'use strict';

// let user = {name: "Vadym"};

//const arr = [user];
// let map = new Map();
// let map = new WeakMap();
// map.set(user, "data");
//
// user = null;

// console.log(user);
//console.log(arr[0]);
// console.log(map.keys());
// console.log(map.has(user));
// console.log(map);

/*
let cache = new WeakMap();

function cashUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: "Elena"};
let alex = {name: "Alex"};

cashUser(lena);
cashUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));
 */


//WeekSet
//add, has, delete

let message = [
    {text: "Hello", from: "John"},
    {text: "Hello World", from: "Mike"},
    {text: "Hello Bob", from: "Aragorn"},
    {text: "Hello Frodo", from: "Gendalf"}
];

let readMessages = new WeakSet();

readMessages.add(message[0]);
// readMessages.add(message[1]);

readMessages.add(message[0]);
message.shift();
console.log(readMessages.has(message[0]));





