/**
 * Represents a Car object with brand, motor, and color properties.
 */
export default class Car {
  /**
   * Creates a new Car instance.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Gets the species symbol for the class.
   * @return {function} The class itself.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clones the current car instance.
   * @return {Car} A new instance of the same car class.
   */
  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
