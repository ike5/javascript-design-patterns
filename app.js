/**
 * ECMAScript 5 only compatible approaches
 */

// defineProp()


var defineProp = function(obj, key, value){
    let config = {};
    config.value = value;
    Object.defineProperty(obj, key, config);
};

var person = Object.create(null);

defineProp(person, "car", "Delorean");
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

console.log(person.dateOfBirth);