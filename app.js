class Vehicle {
    constructor(model) {
        this._model = model;
    }

    get mainModel(){
        return this._model;
    }
    
    set mainModel(newModel){
        this._model = newModel;
    }
}

let bus = new Vehicle('six wheeler');
console.log(bus);
console.log(bus.mainModel);
bus.mainModel = '2 wheeler';
console.log(bus);
console.log(bus.mainModel);