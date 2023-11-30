// 10-car.js

/**
 * Represents a Car with brand, motor, and color attributes.
 *
 * @class Car
 */
export default class Car {
  /**
     * Creates an instance of Car.
     *
     * @param {String} brand - The brand of the car.
     * @param {String} motor - The type of motor of the car.
     * @param {String} color - The color of the car.
     */
  constructor (brand, motor, color) {
    /**
       * The brand of the car.
       * @type {String}
       * @private
       */
    this._brand = brand;

    /**
       * The type of motor of the car.
       * @type {String}
       * @private
       */
    this._motor = motor;

    /**
       * The color of the car.
       * @type {String}
       * @private
       */
    this._color = color;
  }

  /**
     * Creates and returns a new instance of the Car class.
     *
     * @method cloneCar
     * @returns {Car} A new instance of the Car class.
     */
  cloneCar () {
    return new Car(this._brand, this._motor, this._color);
  }
}
