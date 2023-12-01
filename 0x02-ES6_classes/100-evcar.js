import Car from './10-car';

/**
 * Represents an Electric Vehicle (EV) Car that extends the base Car class.
 */
export default class EVCar extends Car {
  /**
   * Creates a new EVCar instance.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor of the car.
   * @param {string} color - The color of the car.
   * @param {number} range - The range of the electric car in miles.
   */
  constructor(brand, motor, color, range) {
    // Call the constructor of the parent class (Car)
    super(brand, motor, color);

    // Additional property specific to EVCar
    this._range = range;
  }

  /**
   * Gets the species symbol for the class, indicating the base class (Car).
   * @return {function} The base Car class.
   */
  static get [Symbol.species]() {
    return Car;
  }
}
