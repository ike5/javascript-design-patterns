// factory pattern

function createPerson(name, age, job){
    let o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        console.log(this.name);
    };
    return o;
}

let person1 = createPerson("Nicholas", 27, "Software Engineer");
let person2 = createPerson("Joey", 54, "Human Resources");

