'use strict';


const reg = /n/;


// SEARCH

const str1 = 'who wana be happy';
const str2 = 'abc dfg';

console.log('search : ', str1.search(reg)); // 6
console.log('search : ', str1.toUpperCase().search(reg)); // -1
console.log('search : ', str2.search(reg)); // -1

// i - ignore register
console.log('search - i - flag : ', str1.toUpperCase().search(/n/i)); // 6


// MATCH

// g - globaly
console.log('match - g - flag : ', 'toUpperCase'.match(/p/g)); // [ 'p', 'p' ]

// m - multistring
console.log('match - m - flag : ', 'toUpperCase'.match(/p/m)); // [ 'p', index: 3, input: 'toUpperCase', groups: undefined ]


// REPLACE

console.log('replace : ', 'toUpperCase'.replace(/./g, '*')); 

console.log('replace : ', 'to.Upper.Case'.replace(/\./g, '*')); 


// TEST

const testStr = '/Projects/javascript/02-js-advanced/01-start/';

const testReg = /script/ig;
const testReg2 = /22/ig;
console.log('test : ', testReg.test(testStr)); // true
console.log('test : ', testReg2.test(testStr)); // false


// \d - digits
// \w - all letters, words
// \s - spaces


const testReg3 = /0\d.*0\d/ig;
console.log('test : ', testReg3.test(testStr)); // true
console.log(testStr.match(testReg3)); // [ '02-js-advanced/01' ]


// \D - not digits
// \W - not letters
// \S - not spaces


console.log('qw as er   t'.match(/\S/ig));