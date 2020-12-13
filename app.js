let defineProp = function (obj, key, value) {
    let config = {};
    config.value = value;
    Object.defineProperty(obj, key, config);
};

// or simpler yet
let d = function (obj, key, value) {
    let config = {};
    config.value = value;
    Object.defineProperty(obj, key, config);
}

let geography = Object.create(null);
defineProp(geography, "Salifornia", "Sacramento");

let world = Object.create(null);
d(world, "USA", true);
d(world, "China", true);
d(world, "France", false);
d(world, "Germany", false);


// Inheritance
let leader = Object.create(world); // inherits from world object
d(leader, "Trump", "The United States of America");

console.log(leader.Trump) // subclass property
console.log(leader.France); // inherited property
