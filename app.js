"use strict"
const p = require('./utilities');

// applicable to getter and setter oject
let person = {
    name_: '',
    get name() {
        return this.name_;
    },
    set name(name) {
        this.name_ = name;
    },
    sayName() {
        console.log(`My ame is ${this.name_}`)
    }
}

person.name = "Matt";
person.sayName();