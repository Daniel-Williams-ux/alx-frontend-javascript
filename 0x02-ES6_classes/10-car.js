export default class Car {
  constructor(brand, motor, color, range) {
    if (typeof brand !== 'string') {
      throw new TypeError('Brand must be a string');
    } else if (typeof motor !== 'string') {
      throw new TypeError('Motor must be a string');
    } else if (typeof color !== 'string') {
      throw new TypeError('Color must be a string');
    } else if (typeof range !== 'string) {
      throw new TypeError('Range must be a string');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    return this;
  }
}
