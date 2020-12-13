/**
 * ECMAScript 5 only compatible approaches
 */

// Object.DefineProperty method
var newObject = {};

Object.defineProperty(newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});


console.table(newObject)