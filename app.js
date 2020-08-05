"use strict"
const p = require('./utilities');

const methodKey = 'sayName';

let person = {
    [methodKey](name) {
        console.log(`My name is ${name}`);
    }
}

person.sayName('ike');