'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
//
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log("Hello! " + this.name );
//     }
// }
// let vadym = new User('Vadym', 31);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, "Smith");
sayName.apply(user, ["Smith"]);

function count(num) {
    return this * num;
}

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Звичайна функція: this = window, але якщо use strict - undefined
// 2) Контекст у методів обьекта - сам обьект
// 3) this - в конструкторах і класах - це новий екземпляр обьекта
// 4) Ручная привязка this: call, apply, bind

const double = a => a * 2;

console.log(double(4));

