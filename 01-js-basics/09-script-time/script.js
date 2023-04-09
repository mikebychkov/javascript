'use strict';


// SET TIMEOUT ---------------------------------------------------------------
//
// WAIT FOR FUNC TO END, THEN WAIT FOR TIMEOUT TO REACH

// TIMERS

const timerId = setTimeout((text) => {
    console.log(text);
}, 2000, 'Hello from past');

const timerId2 = setTimeout((text) => {
    console.log(text);
}, 6000, 'Hello youll never see');

setTimeout(() => {
    console.log('stop 2d timer');
    clearInterval(timerId2);        // CLEAR INTERVAL
}, 4000);


// DISABLING TIMER BY EVENT

console.log('3d TIMER CAN BE DISABLED BY BUTTON');

const timerId3 = setTimeout((text) => {
    console.log(text);
}, 8000, '3d TIMER LAUNCHED');

const btn = document.querySelector('.btn-btn');

btn.addEventListener('click', event => {
    btn.classList.toggle('red');
    clearInterval(timerId3);
    console.log('3d TIMER DISABLED');
});


// SET INTERVAL ---------------------------------------------------------------
//
// DO NOT WAIT FOR FUNC TO END, LAUNCH FUNC EVERY TIME INTERVAL IS REACHED

// setInterval(() => {
//     console.log('INTERVAL');
// }, 2000);

let intervalId;

btn.addEventListener('click', event => {
    if (btn.classList.contains('red')) {
        intervalId = setInterval(() => {
            console.log('INTERVAL', Date.now());
        }, 2000);        
    } else {
        clearInterval(intervalId);
    }
});


// ANIMATION ------------------------------------------------------------------

function myAnimation() {

    const box = document.querySelector('.box');

    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}
//myAnimation();

const btnA = document.querySelector('.btn');
btnA.addEventListener('click', myAnimation);