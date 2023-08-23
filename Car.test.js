const Car = require("./Car");

beforeEach(()=> {
    Toyota = new Car("Toyota", 25000, "V5");
  });

test('can getManufacturer', () => {
    const expected = "Toyota"; 
    const actual = Toyota.getManufacturer();
    expect(actual).toBe(expected);
});