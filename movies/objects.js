'use strict';

// DELETE KEY/VALUE PAIR

const obj = {
    name: 'Qwas',
    height: 54,
    width: 45
};

console.log(obj);

delete obj.name;

console.log(obj);


// LOOP THROUGH OBJECT

const obj2 = {
    name: 'Qwas',
    height: 54,
    width: 45,
    colors: {
        border: 'red',
        bg: 'blue'
    }
};

for (let key in obj2) {
 
    if (typeof(obj2[key]) == 'object') {

        console.log(`${key} :`);

        for (let sub in obj2[key]) {
            console.log(`--- ${sub} = ${obj2[key][sub]}`);
        }

    } else {
        console.log(`${key} = ${obj2[key]}`);
    }
}


// OBJECT KEYS

const obj3 = {
    name: 'Qwas',
    height: 54,
    width: 45,
    colors: {
        border: 'red',
        bg: 'blue'
    }
};

console.log(Object.keys(obj3));
console.log(Object.keys(obj3).length);


// STORING FUNCS

const obj4 = {
    name: 'Qwas',
    height: 54,
    width: 45,
    colors: {
        border: 'red',
        bg: 'blue'
    },
    getSize: () => Object.keys(obj4).length
};
console.log(obj4.getSize());


// DESTRUCTURIZING

const obj5 = {
    name: 'Qwas',
    colors: {
        border: 'red',
        bg: 'blue'
    }
};
const {border, bg} = obj5.colors; // KEYS MUST BE THE SAME
console.log(border);
console.log(bg);


// OBJECT.ASSIGN - JOIN AND SHALOW COPY OBJECTS

const obj11 = {
    a: 1,
    b: 3
};
const obj12 = {
    d: 11,
    c: 32
};
console.log(Object.assign(obj11, obj12));

const obj11Ref = obj11;
console.log(obj11 === obj11Ref);

const obj111 = Object.assign({}, obj11);
console.log(obj11 === obj111);


// SPREAD OPERATOR

const combinedObj = {...obj11, ...obj12};
console.log(combinedObj);


// PROTOTYPES

const bird = {    
    canFly: true
};
const duck = {
    canSweem: true
};
// duck.__proto__ = bird; // OLD WAY
Object.setPrototypeOf(duck, bird);
console.log(duck.canFly);

const eagle = Object.create(bird);
eagle.canSweem = false;
eagle.isPredator = true;
console.log(eagle.canFly);
console.log(eagle.canSweem);
console.log(eagle.isPredator);

