'use strict';


// OLD WAY GETING ELEMENTS ----------------------------------

const box = document.getElementById('box');
//console.log(box);

const btns = document.getElementsByTagName('button');
//console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
//console.log(circles);


// NEW WAY GETING ELEMENTS-----------------------------------

const wrapper = document.querySelector('.wrapper');

const hearts = wrapper.querySelectorAll('.heart');
//console.log(hearts);

//hearts.forEach(item => console.log(item));


// STYLES ---------------------------------------------------

//console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: yellow; width: 960px';

btns[1].style.borderRadius = '100%';

circles[1].style.backgroundColor = 'purple';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'gold';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});


// ELEMENT PLACEMENT ----------------------------------------

const divElem = document.createElement('div');
const textElem = document.createTextNode('I was here');

divElem.classList.add('black');

document.body.append(textElem);

//wrapper.append(divElem);
//wrapper.prepend(divElem);
//hearts[0].before(divElem);
hearts[0].after(divElem);


// DELETE ELEMENT -------------------------------------------

circles[0].remove();

hearts[0].replaceWith(btns[0]);


// EDIT ELEMENT ---------------------------------------------

divElem.innerHTML = '<i>Hello</i> <b>World</b>';
//divElem.textContent = 'TEXT CONTENT';

divElem.insertAdjacentHTML('afterend', '<h2>Well hello</h2>');