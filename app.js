// Function constructor pattern

function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(this.name);
    };
}

let person1 = new Person("Nicholas", 28, "Software Engineer");
let person2 = new Person("Gred", 38, "Doctor");

person1.sayName();
person2.sayName();