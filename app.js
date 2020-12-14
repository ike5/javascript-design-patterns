function Person(name, age, profession, nationality) {

    this.name = name;
    this.age = age;
    this.profession = profession;
    this.nationality = nationality;
}

Person.prototype.toString = function () {
    return `${this.name} is ${this.age} years old.\n${this.name} works as a ${this.profession} and is from ${this.nationality}.`;
};

let ike = new Person("Ike Maldonado", 31, "Computer Scientist", "The United States, Brazil, and Puerto Rico");
let desi = new Person("Desi Tafoya", 49, "Manager", "Mexico and The United States of America");

console.log(desi.toString());
console.log(ike.toString());