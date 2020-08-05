"use strict"
const p = require('./utilities');

// object destructring

let person = {
    name: 'Matt',
    age: 27
};

let { name: personName, age: personAge } = person;

console.log(personAge);
console.log(personName);

