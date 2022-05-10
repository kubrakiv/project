"use strict";

const soldier = {
    health: 400,
    armour: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// Object.setPrototypeOf(jonh, soldier);

jonh.sayHello();
