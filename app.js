/*
Method one of creating an object
*/

let newObject = {};

// Dot syntax
newObject.things = {};
newObject.things.obj = "pens";
newObject.things.quantity = 5;
newObject.things.price = 1.95;
newObject.people = {};
newObject.people.name = "Desi";
newObject.people.age = 49;
newObject.people.name = "Ike";
newObject.people.age = 31;

// This is not the idea way to instantiate an object if you wish to put more
// than a single value to the object's constuctor.


let thingsInHouse = newObject.things; // note: no parenthesis since it's a key
let peopleInHouse = newObject.people;
// when an object is displayed a table can be used to display it
console.table(thingsInHouse);
console.table(peopleInHouse);
console.table(newObject);
