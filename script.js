"use strict";

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// };

// Тернарный оператор

// const num = 50;

// (num === 50) ? console.log('Ok!') : console.log('Error!');

// Switch

const num = 50;

switch (num) {
    case 49: 
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}