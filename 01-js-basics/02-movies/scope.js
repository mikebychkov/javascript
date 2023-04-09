'use strict';

// SCOPE, CLOSURE - ЗАМЫКАНИЕ, ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ 
// - СОЗДАЕТСЯ НОВЫЙ В МОМЕНТ ВЫПОЛНЕНИЯ ФУНКЦИИ (СОСТОЯНИЕ ВНЕШНЕГО ОКРУЖЕНИЯ)

function createCounter() {

    let counter = 0;

    return () => ++counter;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter2());
console.log(counter1());
console.log(counter2());
