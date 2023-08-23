const Car = require("./Car"); 

const Dealership = function(dealershipName, capacity){
    this.dealershipName = dealershipName;
    this.capacity = capacity;
    this.carsInStock = [];
}

// getters and setters 

Dealership.prototype.getDealershipName = function() {return this.dealershipName}

Dealership.prototype.setDealershipName = function(newName) {
     this.dealershipName = newName;
    }

Dealership.prototype.getCapacity = function () { return this.capacity}
    
Dealership.prototype.setCapacity = function(newCapacity) {
        this.price = newCapacity;
    } 

Dealership.prototype.getCarsInStock = function() {
    return this.carsInStock
}   

// methods

// count cars in stock 

Dealership.prototype.countCarsInStock = function() {
    return this.carsInStock.length;
}

const dealership1 = new Dealership("Poynings Cars", 200);
console.log("Number of cars in stock:", dealership1.countCarsInStock());


// add cars to stock 

Dealership.prototype.addCar = function (car) {
    this.carsInStock.push(car);
}

const car1 = new Car("Honda", 1200, "V6");
const car2 = new Car("BMW", 2000, "V8");

const dealership2 = new Dealership("Flank Cars", 100);
dealership2.addCar(car1);
dealership2.addCar(car2);
console.log("Cars in stock: ", dealership2.getCarsInStock());

module.exports = Dealership;