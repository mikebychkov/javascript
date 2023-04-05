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
    setTimeout(() => {
        console.log("F1");
    }, 500);
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

//-SPREAD-OPERATOR-----------------------------------------------------

function abc(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const params = [3,2,1,0,-1]; // SPARE VALUES IGNORED
abc(...params);

// EXERCISE------------------------------------------------------------

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    
    const totalVol = data.shops.map((s) => {
        return s.width * s.length * data.height;
    }).reduce((a, b) => a + b);

    console.log(`Total vol: ${totalVol}`);

    const totalMoney = totalVol * data.moneyPer1m3;

    console.log(`Total money: ${totalMoney}`);

    return data.budget >= totalMoney;    
}

console.log(isBudgetEnough(shoppingMallData));

//

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function takeFirst3(arr) {
    const rsl = [];
    for (let i = 0; i < 3; i++) {
        rsl.push(arr.shift());
    }
    return rsl;
}

function sortStudentsByGroups(arr) {

    console.log(arr);

    const newArr = arr.slice();

    newArr.sort();

    const gr1 = takeFirst3(newArr);
    const gr2 = takeFirst3(newArr);
    const gr3 = takeFirst3(newArr);

    let leftStud = 'Оставшиеся студенты: ';
    if (newArr.length == 0) {
        leftStud += '-';
    } else {
        leftStud += newArr.join(', ');
    }

    return [gr1, gr2, gr3, leftStud];
}

console.log(sortStudentsByGroups(students));














