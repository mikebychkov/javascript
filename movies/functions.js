'use strict';

//-------------------------------------------------------

const logger = function() {
    console.log("logging my logs");
};
logger();

//-------------------------------------------------------

const ff = () => {
    console.log("ffffffffffffff");
};
ff();

//-------------------------------------------------------

const calc = (a, b) => a + b;
console.log(calc(6, 7));

//-------------------------------------------------------

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

//-------------------------------------------------------

function hourString(n) {
    switch(n) {
        case 1: return 'час'; 
        case 2:
        case 3:
        case 4: return 'часа'; 
        case 5: 
        case 6: 
        case 7: 
        case 8: 
        case 9: 
        case 0: return 'часов';
        default: return '';
    }
}

function getTimeFromMinutes(m) {

    if (isNaN(m) || m < 0 || !Number.isInteger(m)) return 'Ошибка, проверьте данные';

    const div = m / 60;
    const hour = parseInt(div);
    const lastHour = hour.toString().slice(-1); //console.log(lastHour);
    const hourStr = hourString(+lastHour); //console.log(hourStr);

    const min = m % 60;

    return `Это ${hour} ${hourStr} и ${min} минут`;
}
console.log(getTimeFromMinutes(4545));

//-------------------------------------------------------

function fib(n) {
    
    if (typeof(n) != typeof(1) || !Number.isInteger(n)) return '';

    const num = [0, 1];
    
    for (let i = 2; i < n; i++) {
        num[i] = num[i - 1] + num[i - 2];
    }

    let delim = '';
    let rsl = '';
    for (let i = 0; i < n; i++) {
        rsl += delim + num[i];
        delim = ' ';
    }
    return rsl;
}
console.log('7 - ' + fib(7)); // '0112358'
console.log('"7" - ' + fib('7')); // ''
console.log('5 - ' + fib(5)); // '01123'
console.log('1 - ' + fib(1)); // '0'
console.log('0 - ' + fib(0)); // ''
console.log('5.5 - ' + fib(5.5)); // ''

//-CALLBACK------------------------------------------------------

function f1() {
    setTimeout(() => console.log("F1"), 500);
}
function f2() {
    console.log("F2");
}
f1();
f2();
// 'F2 -> F1' ORDER NOT DEFINED

function f3(callbackFunc) {
    setTimeout(() => {
        console.log("F3"); 
        callbackFunc();
    }, 500);    
}
function f4() {
    console.log("F4");
}
f3(f4);
// 'F3 -> F4' ORDER IS OK
