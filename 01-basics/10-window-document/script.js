'use strict';


const box = document.querySelector('.box');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height); // FIREFOX:400,350  CHROME:385,335 (because of the scroll)


const widthOff = box.offsetWidth;
const heightOff = box.offsetHeight;

console.log(widthOff, heightOff); // FIREFOX:400,350  CHROME:400,350


const widthScr = box.scrollWidth;
const heightScr = box.scrollHeight;

console.log(widthScr, heightScr); // FIREFOX:400,1806  CHROME:385,1352

//

const btn = document.querySelector('button');
btn.addEventListener('click', event => {
    console.log('click');
    box.style.height = box.scrollHeight + 'px';
});

const scrollVal = document.querySelector('.val-box');
box.addEventListener('scroll', event => {
    scrollVal.textContent = box.scrollTop;
});

//

console.log(box.getBoundingClientRect()); // DOMRect

console.log(window.getComputedStyle(box)); // FIREFOX:CSS2Properties  CHROME:CSSStyleDeclaration

//

console.log(document.documentElement.scrollTop); // CAN BE SET
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

window.scrollBy(0, 400); // CHANGE CLIENT POSITION RELATE TO CURRENT POSITION
window.scrollTo(0, 400); // CHANGE CLIENT POSITION RELATE TO ABSOLUT POSITION
