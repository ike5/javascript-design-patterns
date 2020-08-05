"use strict"
const p = require('./utilities');

// reuse as object literal
let person = {
    name: 'Matt',
    age: 27
}

let { name, age } = person;

console.log(name);
console.log(age);