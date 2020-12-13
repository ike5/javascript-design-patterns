let newObject = {};

Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World!",
        writable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: false
    }
});

console.table(newObject);
console.log(newObject.someKey);
console.log(newObject.anotherKey);