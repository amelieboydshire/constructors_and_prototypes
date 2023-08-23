const Dealership = function(dealershipName, capacity){
    this.dealershipName = dealershipName;
    this.capacity = capacity;
    this.carsInStock = [];
}

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

Dealership.prototype.setCarsInStock = function(newCars) {
    this.carsInStock = newCars;
}
