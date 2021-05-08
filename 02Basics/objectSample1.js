let car={
    name:'Honda',
    fuelAdded:0,
    fuelUsed:0,
}

let addFuel = function(car, ltrs){return (car.fuelAdded += ltrs)}
let useFuel = function(car, ltrs){return (car.fuelUsed -= ltrs)}
let fuelSummary = function (car) {
    return car.fuelAdded + car.fuelUsed
}

//remember object is not referenced so properties are modified

console.log(addFuel(car,210));
console.log(useFuel(car,10));
console.log(fuelSummary(car));
