class Animal{
    constructor(species){
        this._species = species;
    }

    get type(){
        return this._species;
    }

    set type(animalType){
        this._species = animalType;
    }
}

let dog = new Animal('canis');
console.log(dog);
console.log(dog.type);
dog.type = 'gatus';
console.log(dog);
console.log(dog.type);
