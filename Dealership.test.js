const Dealership = require("./Dealership");
const Car = require("./Car"); 


beforeEach(() => {
    dealership = new Dealership("Reign Cars", 150)
});

test('can getDealershipName', () => {
    const expected = "Reign Cars"; 
    const actual = dealership.getDealershipName();
    expect(actual).toBe(expected);
});

test('can get dealership capacity', () => {
    const expected = 150;
    const actual = dealership.getCapacity();
    expect(actual).toBe(expected);
});

test('can add car to carsInStock', () => {
    const car = new Car("Toyota", 1000, "V4");
    dealership.addCar(car);
    const carsInStock = dealership.getCarsInStock();
    expect(carsInStock).toContain(car);
})



