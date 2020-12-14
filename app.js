// Basic Constructor pattern

function Car(model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function(){
        return this.model + " has done " + this.miles + " miles";
    };
}

let civic = new Car("Honda Civic", 2009, 27300);
let mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.table(civic);
console.log(civic);

console.log(mondeo.toString());
console.table(mondeo);
console.table(mondeo.toString()); // nothing prints
console.log(mondeo);