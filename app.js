function Car(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;
}

// Note here that we are using the Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

// Usage:
let civic = new Car("Honda Civic", 2009, 20000);
let toyota = new Car("Toyota Camry", 2020, 5000);

console.log(civic.toString());
console.log(toyota.toString());
