'use strict';

// Чему равно такое выражение: [ ] + false - null + true ?
console.log([] + false - null + true); // = NaN
console.log([] + false + null + true); // = 'falsenulltrue'
console.log([] + false + true); // = 'falsetrue'
console.log([] + false - true); // = NaN

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
let y = 1; let x = y = 2;
console.log(x); // = 2

// Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); // = '12'
console.log('' + 1 + 2); // = '12'

// Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined); // = null
console.log(2 && 1 && 0 && undefined); // = 0
console.log(2 && 1 && false && 0 && undefined); // = false

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
let a = 1;
let b = 0;
console.log((a && b)); // = 0
console.log(!!(a && b)); // = false

console.log(1 && false); // = false
console.log(1 || false); // = 1
console.log(true && 1); // = 1
console.log(true && 2); // = 2
console.log(1 && true); // = true
console.log(2 && true); // = true

console.log(1 == true); // = true
console.log(2 == true); // = false
console.log(2 == false); // = false
console.log(0 == false); // = true

// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
console.log(null || 2 && 3 || 4); // = 3
console.log(2 && 3); // = 3
console.log(3 && 2); // = 2
console.log(2 || 3); // = 2
console.log(3 || 2); // = 3

// Что выведет этот код: alert( +"Infinity" ); ?
console.log(+'Infinity'); // = Infinity

// Верно ли сравнение: "Ёжик" > "яблоко"?
console.log('Ёжик' > 'яблоко'); // = false

// Чему равно 0 || '' || 2 || undefined || true || false ?
console.log(0 || '' || 2 || undefined || true || false); // = 2




