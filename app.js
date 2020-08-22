class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }

    set temperature(celsius) {
        this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log(thermos);

let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);


thermos.temperature = 26;
console.log(thermos.temperature, thermos);

temp = thermos.temperature; // 26 in Celsius
console.log(temp);