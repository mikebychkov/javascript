'use strict';


// FUNCTIONS CONSTRUCTORS

function FUser(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.toString = () => {
        return `${this.name} (${this.id})`;
    }
}

// User.prototype.hello = () => {
//     console.log(`Hello ${this.name}`); // Hello undefined
//     return `Hello ${this.name}`;       // Hello undefined
// };

// IN ARROW FUNCTIONS 'THIS' IS REFERS NOT TO THE OBJECT, BUT TO THE PLACE IT WAS CREATED (CLOSURE)
// AS IT WORKS WITH VARIABLES

FUser.prototype.hello = function() {
    console.log(`Hello ${this.name}`);    // Hello Petr
    return `Hello ${this.name}`;
};

const ivan = new FUser('Ivan', 1);
const petr = new FUser('Petr', 2);

console.log(ivan.toString());

petr.hello();

// const output1 = document.querySelector('.output1');
// output1.textContent = petr.hello();


// CONTEXT

function printName() {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: 'John'
};

//printName(); // WINDOW (GLOBAL), UNDEFINED

printName.call(user); //  user OBJECT, JOHN

printName.apply(user); //  user OBJECT, JOHN

printName.apply(petr); //  user OBJECT, PETR


// CALL & APPLY DIFFERECE

function userToString(sex = undefined, age = undefined) {
    return `${this.name} ${sex} ${age}`;
}

console.log(userToString.call(petr, 'male', 29)); // PARAMS AS IS
console.log(userToString.apply(ivan, ['male', 31])); // PARAMS IN ARRAY


// BIND

function count(num) {
    return this * num;
}
const mult = count.bind(2);
console.log(mult(2));
console.log(mult(12));


// 

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     console.log(this);                      // this = Window
// });
// btn.addEventListener('click', function() {
//     console.log(this);                      // this = event.target = btn
// });


// CLASSES

console.log('#'.repeat(50));

class User {

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    toString() {
        return `${this.name} (${this.id})`;       
    }
    hello() {
        console.log(`Hello ${this.name}`);    
        return `Hello ${this.name}`;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}

class Human {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `${this.name} (${this.age})`;       
    }
}

// class Admin extends User, Human {           // CAN BE EXTENDED WITH ONLY SINGLE CLASS
// }

class Admin extends User {

    constructor(name, id, email, password) {
        super(name, id);
        this.id = id + ' ' + email;
        this.email = email;
        this.password = password;
    }
    toString() {
        return this.name + ' ' + this.email;       
    }
    getId() {
        return this.id;
    }
    getParentId() {
        return super.getId();
    }
    setId(id) {
        this.id = id;
    }
    setParentId(id) {
        super.setId(id);
    }
}

const julls = new Admin('julls', 23, 'julls@email.com', '1234');

// console.log(julls);
// console.log(julls.toString());

console.log(julls.getId());
julls.setId(99);
console.log(julls.getId());
console.log(julls.getParentId());
julls.setParentId(131313);
console.log(julls.getId());
console.log(julls.getParentId());
