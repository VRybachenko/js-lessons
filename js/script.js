'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function (){
        console.log(`Hello ${this.name}!`);
    }
}

User.prototype.exit = function () {
    console.log(`User exit: ${this.name}`);
}

const vadym = new User("Vadym", 31);
const alex = new User("Alex", 20);

vadym.exit();
alex.exit();

vadym.hello();
alex.hello();

console.log(vadym);
console.log(alex);