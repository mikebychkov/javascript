"use strict";

const result = confirm("Are you sure?");
console.log(result + " (typeof:" + typeof(result) + ")");

const answer = prompt("Enter your name:", "");
console.log(answer + " (typeof:" + typeof(answer) + ")");

const answers = [];
answers[0] = prompt("Enter your sex:", "");
answers[1] = prompt("Enter your age:", "");
answers[2] = prompt("Enter your something else:", "");
document.write(answers);

console.log("Type of answers array: " + typeof(answers));

console.log("Type of null: " + typeof(null));