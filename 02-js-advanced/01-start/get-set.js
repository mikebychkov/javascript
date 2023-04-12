'use stict';

class User {

    constructor(name, age, specialisation = 'Engineer') {
        this._name = name;
        this._age = age;
        this.#specialisation = specialisation;
    }

    #specialisation = 'Engineer'; // # - private (only new standart)

    get name() {
        return this._name;
    }

    set name(s) {
        this._name = s;
    }

    get age() {
        return this._age;
    }

    set age(n) {
        this._age = n;
    }

    toString() {
        return `User: ${this._name} (age: ${this._age}) ${this.#specialisation}`; 
    }
}

const user = new User('Ivan', 53);
console.log(user);

user.name = 'Petr';
user.age = 33;
console.log(user);

console.log(user.toString());

const dev = new User('James', 27, 'Developer');
console.log(dev, dev.toString());
