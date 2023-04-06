'use strict';


// CHILD NODES

console.log('Body child nodes', document.body.childNodes);

console.log('First body child NODE', document.body.firstChild);
console.log('First body child ELEMENT', document.body.firstElementChild);

console.log('Last body child NODE', document.body.lastChild);
console.log('Last body child ELEMENT', document.body.lastElementChild);


// PARENT NODES

const currentElem = document.querySelector('#current'); // # USED WHEN SELECT BY ID
console.log('Parent NODE', currentElem.parentNode);
console.log('Parent ELEMENT', currentElem.parentElement);
console.log('Parent of the parent', currentElem.parentNode.parentNode);


// SIBLING NODES

const dataCurrentElem = document.querySelector('[data-current="3"]'); // [] USED WHEN SELECT BY ATTRIBUTE
console.log('Next sibling NODE', dataCurrentElem.nextSibling);
console.log('Next Next sibling NODE', dataCurrentElem.nextSibling.nextSibling);
console.log('Prev sibling NODE', dataCurrentElem.previousSibling);
console.log('Prev Prev sibling NODE', dataCurrentElem.previousSibling.previousSibling);

console.log('Next sibling ELEMENT', dataCurrentElem.nextElementSibling);
console.log('Prev sibling ELEMENT', dataCurrentElem.previousElementSibling);


// FOR OF - TO GO THROUGH CHILD NODES

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') continue; // SKIP TEXT NODES TO GET ONLY ELEMENT CHILDREN
    console.log(node);
}

// FOR IN - GOES THROUGH KEY COLLECTION OF THE OBJECT (WHICH IS KEY/VALUE COLLECTION) 
//
// for (let nodeKey in document.body.childNodes) {
//     console.log(document.body.childNodes[nodeKey]);
// }

// FOR IN - LOOP KEY COLLECTION
//
// const arr = ['qwass', 23, 79, '$#!', {name: 'New object'}];
// for (let arrElem in arr) {
//     console.log(arrElem, arr[arrElem]);
// }

// FOR OF - LOOP VALUE COLLECTION
//
// const arr = ['qwass', 23, 79, '$#!', {name: 'New object'}];
// for (let arrElem of arr) {
//     console.log(arrElem);
// }
