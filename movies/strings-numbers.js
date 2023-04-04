'use strict';

// STRING METHODS

const str = 'Hello world';

console.log(str.slice(-5));
console.log(str.slice(-5, -2));
console.log(str.slice(6));
console.log(str.slice(6, 9));

console.log(str.substring(6));
console.log(str.substring(6, 9));
console.log(str.substring(7, 3));

// NUMBER METHODS

const num1 = 12.3;
const num2 = 12.7;

console.log(Math.round(num1));
console.log(Math.round(num2));
console.log(Math.sqrt(25));
console.log(Math.random());
console.log(Math.max(1, 5, 8));

const strNum = '33.3qwas';
console.log(parseInt(strNum));
console.log(parseFloat(strNum));