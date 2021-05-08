//motive is to create an object which has methods related to it
//provide complete seperation of code logic

let car = { 
    name:'Honda',
    fuelAdded:0,
    fuelUsed:0,
    
    //this will give error because of scope due to curlly braces
    // addFuel : function(ltrs){return (fuelAdded += ltrs)},

    //to fix this use this.propertyName
    addFuel : function(ltrs){return (this.fuelAdded += ltrs)},
    useFuel : function(ltrs){return (this.fuelUsed -= ltrs)},
    fuelSummary : function () {
        return this.fuelAdded + this.fuelUsed
    }
}

// let addFuel = function(car, ltrs){return (car.fuelAdded += ltrs)}
// let useFuel = function(car, ltrs){return (car.fuelUsed -= ltrs)}
// let fuelSummary = function (car) {
//     return car.fuelAdded + car.fuelUsed
// }

//remember object is not referenced so properties are modified

console.log(car);
console.log(car.addFuel(210));
console.log(car.useFuel(10));
console.log(car.fuelSummary());
