"use strict"

function makePerson(a){
    return{
        name: a
    };
}

var person = makePerson("Matt");
console.log(person.name);