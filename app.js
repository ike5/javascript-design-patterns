/*
Square bracket method
*/

// Using new Object() and {} technique
let firstObj = {};
let secondObj = new Object();

// Square bracket method
firstObj["someKey"] = "Hello World!";
let key = firstObj["someKey"];
let key1 = firstObj.someKey;

console.log(key, key1)