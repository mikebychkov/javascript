'use strict';

const rate = document.querySelector('#rate');
const sum = document.querySelector('#sum');
const usd = document.querySelector('#usd');

rate.value = 11350;


// RATE REQUEST (ONCE)

function getRate() {

    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass);
    request.open('GET', 'http://127.0.0.1:8080/currency/rate/usd');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState == 4 && request.status == 200) {
    //         const rateObj = JSON.parse(request.response);
    //         rate.value = rateObj.rate;
    //         console.log(request.response);
    //     } else {
    //         rate.value = 'Error';
    //     }
    // });

    request.addEventListener('error', () => {rate.value = 'Error...';})

    request.addEventListener('load', () => {
        if (request.status == 200) {
            const rateObj = JSON.parse(request.response);
            rate.value = rateObj.rate;
            console.log(request.response);
        } else {
            rate.value = 'Error';           // IF URL CHANGED IT IS ALWAYS CORS EXEPTION
        }
    });
}

sum.addEventListener('input', getRate, {once: true});

usd.addEventListener('input', getRate, {once: true});


// AMOUNT CALCULATE

sum.addEventListener('input', () => {

    usd.value = (sum.value / rate.value).toFixed(2);    
});

usd.addEventListener('input', () => {

    sum.value = (usd.value * rate.value).toFixed(2);
});