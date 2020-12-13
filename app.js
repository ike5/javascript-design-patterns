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
console.log(geography.Salifornia);

let world = Object.create(null);
d(world, "USA", true);
d(world, "China", true);
d(world, "France", false);
d(world, "Germany", false);
console.log(world["USA"])
