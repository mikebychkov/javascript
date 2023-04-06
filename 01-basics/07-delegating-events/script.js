'use strict';


// CLASS-LIST

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList);
// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.item(1));

// btns[0].classList.add('red', 'some-class-else');
// btns[0].classList.remove('blue');
// btns[0].classList.toggle('blue');

// if (btns[1].classList.contains('red')) {
//     console.log('Do smthink if it red');
// }

btns[0].addEventListener('click', event => {
    btns[1].classList.toggle('red');
});


// DELEGATING
//
// PUTTING EVENT LISTENER ON WRAPPER INSTEAD OF ELEMENT ITSELF TO PROPOGATE EVENT FOR FURTHER DYNAMIC 
// CONTENT ELEMENTS

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', event => {
    if (event.target && event.target.tagName == 'BUTTON') { // ONLY BUTTONS
        console.log('BUTTON CLICK');
    }    
});

const newButton = document.createElement('button');
newButton.classList.add('red');
wrapper.append(newButton);

wrapper.addEventListener('click', event => {
    if (event.target && event.target.matches('button.red')) { // ONLY RED BUTTONS
        console.log('RED');
    }    
});
