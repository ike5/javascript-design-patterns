let myObjectLiteral = {
    variableKey: "variableValue",

    functionKey: function () {
        return "Hello World!";
    }
};


let myModule = {

    myProperty: "someValue",

    // object literals can contain properties and methods.
    // e.g. we can define a further object for module configuration:
    myConfig: {
        useCaching: true,
        language: "en"
    },

    // a very basic method
    myMethod: function () {
        console.log("Where in the world is Paul Irish today?");
    },

    // output a value based on the current configuration
    myMethod2: function () {
        console.log("Caching is:" + (this.myConfig.useCaching) ? "enabled" : "disabled");
    },

    // override the current configuration
    myMethod3: function(newConfig){
        
        if(typeof newConfig === "object"){
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    }
}

myModule.myMethod();
myModule.myMethod2();
myModule.myMethod3({
    language: "fr",
    useCaching: false
});