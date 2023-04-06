'use strict';

const btn = document.querySelector('button');


// EVENT VARIANTS

// btn.onclick = () => alert('Hello there'); // BAD PRACTISE
// btn.onclick = () => alert('Hello again'); // BAD PRACTISE

// btn.addEventListener('click', () => alert('Hello there')); // 
// btn.addEventListener('click', () => alert('Hello again')); // EVENTS COMBINING

// btn.addEventListener('mouseenter', () => console.log(`mouse enter button ${Date.now()}`));


// EVENT OBJECT ACCESS

// btn.addEventListener('mouseenter', (event) => console.log(event));

btn.addEventListener('mouseenter', (event) => event.target.style.backgroundColor = 'red');
btn.addEventListener('mouseleave', (event) => event.target.style.backgroundColor = 'green');


// EVENT REMOVAL

// const buttonOnClickEvent = event => {
//     console.log(event);
//     event.target.removeEventListener('click', buttonOnClickEvent);
// };
// btn.addEventListener('click', buttonOnClickEvent);


// BUTTON EVENT LAUNCHES SAME EVENT ON PARENT NODE (ВСПЛЫТИЕ СОБЫТИЯ)

const overlayElem = document.querySelector('.overlay');
overlayElem.addEventListener('click', 
    event => console.log('Click on overlay', event.target, event.currentTarget));


// PREVENT DEFAULT

const linkElem = document.querySelector('a');
linkElem.addEventListener('click', event => {
    event.preventDefault();
    console.log(event.target);
});


// EVENT OPTIONS (ONCE: TRUE)

const buttonOnClickEvent2 = () => console.log('Click on button ONCE');    
const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', buttonOnClickEvent2, {once: true}));






