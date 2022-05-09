"use strict";

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr)
// promotion(res);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// function unDefined() {};
// console.log(unDefined());

// function sayHello(name) {
//     console.log(`Привет, ${name}`);

// }
// sayHello('Антон');


// function returnNeighboringNumbers(num) {
//     let arr = [];
//     arr[0] = num - 1;
//     arr[1] = num;
//     arr[2] = num + 1;
//     console.log(arr);
// }
// returnNeighboringNumbers(10);

function getMathResult(base, long) {
    if (typeof(long) !== 'number' || long <= 0) {
        return base;
    }

    let str = '';

    for (let i = 1; i <= long; i++) {
        if (i === long) {
            str += `${base * i}`;
        } else {
            str += `${base * i}---`;
        }
    }
    console.log(str);
    return str;
}

getMathResult(10, 5);

const str = "test";

console.log(str.toLocaleUpperCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 3));

let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList); // список гостей, состоящий из нескольких строк

console.log( "\u{1F60D}" );

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);