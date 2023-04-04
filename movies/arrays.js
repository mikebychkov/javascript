'use strict';

// POP, PUSH

const arr1 = [1,2,3,4,5];

console.log(`arr.pop() - ${arr1.pop()}`);
console.log(arr1);

arr1.push(55);
console.log(arr1);

// SLICE

console.log(arr1.slice(-2));

// MAP

const arr2 = arr1.map((i) => i * i);
console.log(arr2);

// JOIN, SPLIT

console.log(arr1.join(' '));  // String.split()

// SHIFT, UNSHIFT

console.log(`arr.shift() - ${arr1.shift()}`);
console.log(arr1);

arr1.unshift(11);
console.log(arr1);

// FOREACH

arr1.forEach((i) => console.log(i));

// SORT

const arr22 = [3, 1, 7, 6, 8, 10, 45, 13];
console.log(arr22.sort());               // SORT AS STRING
console.log(arr22.sort((a, b) => a -b)); // COMPARATOR

// COPY

const arr11 = arr1.slice();
console.log(arr1 === arr11);

const arr111 = Object.assign([], arr1);
console.log(arr1 === arr111);
console.log(arr111 + ' = ' + arr1);

// SPREAD OPERATOR

const nums = [1, 44, 76, 98];
const strs = ['qw', 'rt', 'bb', 'asda'];
const data = [...nums, ...strs, 'new string', 1, 2, 3];
console.log(data);

const dataCopy = [...data];
console.log(data === dataCopy);

// FILTER

const curr = ['qw', 'rt', 'bb', 'asda'];
const currF = curr.filter((c) => c != 'bb');
console.log(currF);