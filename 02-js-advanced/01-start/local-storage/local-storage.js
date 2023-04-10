'use strict';

// window.localStorage.myNameIs = 'Whooo?';
// console.log(localStorage.myNameIs);
// localStorage.removeItem('myNameIs');

// localStorage.setItem('number', 5);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');

// localStorage.clear();

//

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('.wrapper');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', checkbox.checked);
});

//

form.style.backgroundColor = localStorage.getItem('formColor');

change.addEventListener('click', () => {
    if (localStorage.getItem('formColor')) {
        form.style.backgroundColor = '';
        localStorage.removeItem('formColor');
    } else {
        form.style.backgroundColor = 'yellow';
        localStorage.setItem('formColor', 'yellow');
    }
});