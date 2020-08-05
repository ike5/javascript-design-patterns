const methodName = 's';

let print = {
    [methodName](string) {
        console.log(`${string}`);
    }
}

module.exports = print;