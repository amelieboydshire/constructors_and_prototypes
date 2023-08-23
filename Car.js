const Car = function(manufacturer, price, engineType){
    this.manufacturer = manufacturer;
    this.price = price;
    this.engineType = engineType;
}

Car.prototype.setManufacturer = function(newManufacturer) {
    this.manufacturer = newManufacturer;
};

Car.prototype.getManufacturer = function() {
  return this.manufacturer;
}

Car.prototype.setPrice = function(newPrice) {
   this.price = newPrice;
  };
  
Car.prototype.setEngineType = function(newEngineType) {
    this.engineType = newEngineType;
  };


module.exports = Car;