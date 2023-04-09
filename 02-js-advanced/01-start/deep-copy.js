'use strict';

const person = {
    name: 'Soho',
    age: 43,
    family: {
        wife: {
            name: 'Judie',
            age: 39
        },
        son: {
            name: 'Levis',
            age: 21
        }
    },
    pets: [
        'Marva The Parrot',
        'Goofy The Dog'
    ]
};

const copy = JSON.parse(JSON.stringify(person));

copy.pets[1] = 'Dumb Cat';
copy.family.wife.name = 'Nancy';

console.log(person);
console.log(copy);
