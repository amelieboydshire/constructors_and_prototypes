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


Dealership.prototype.addCar = function (car) {
    this.carsInStock.push(car);
}

const car1 = new Car("Honda", 1200, "V6");
const car2 = new Car("BMW", 2000, "V8");

const dealership1 = new Dealership("Flank Cars", 100);
dealership1.addCar(car1);
dealership1.addCar(car2);
console.log("Cars in stock: ", dealership1.getCarsInStock());


module.exports = Dealership;