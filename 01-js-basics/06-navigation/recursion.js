'use strict';

function factorial(n) {
    if (!Number.isInteger(n) || n <= 0) return 'Input Error';
    if (n === 1) return n;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
