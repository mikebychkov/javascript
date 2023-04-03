'use strict';

const logger = function() {
    console.log("logging my logs");
};
logger();

const ff = () => {
    console.log("ffffffffffffff");
};
ff();

const calc = (a, b) => a + b;
console.log(calc(6, 7));

function getMathResult(baseNum, count) {
    
    if (typeof(count) != typeof(1)) return baseNum;
    if (count <= 0) return baseNum;
    
    let rsl = '';
    let delim = '';
    for (let i = 1; i <= count; i++) {
        rsl += delim + i * baseNum;
        delim = '---';
    }
    
    return rsl;
}

console.log(getMathResult(5, 3));
console.log(getMathResult(5, '3'));
console.log(getMathResult(10, 5));
console.log(getMathResult(10, -5));