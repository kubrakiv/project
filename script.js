"use strict";

// for (let i = 0; i < 3; i++) {
//         console.log(i);
//         for (let j = 0; j < 3; j++) {
//             console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// function firstTask() {
    
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     return result;
// }

// firstTask();

// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
    
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     return data;
// }

// secondTask();

// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
    
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i];
//     }
//     console.log(result);
//     return result;
// }
// thirdTask();

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 30;
    console.log(num);
}
showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5, 7));
// console.log(calc(4, 2));
// console.log(calc(5, 10));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

let logger = function() {
    console.log('Hello!')
};

logger();

const calc = (a, b) => {
    // console.log('YEP');
    return a + b;
};

console.log(calc(2, 10));
console.log(calc(20, 10));
console.log(calc(21, 90));