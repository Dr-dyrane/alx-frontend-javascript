// 6-sky_high.js

import Building from './5-building.js';

/**
 * Represents a skyscraper building that extends from the Building class.
 *
 * @class SkyHighBuilding
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates an instance of SkyHighBuilding.
   *
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor (sqft, floors) {
    // Call the constructor of the parent class (Building)
    super(sqft);

    /**
     * The number of floors in the building.
     * @type {Number}
     * @private
     */
    this._floors = floors;
  }

  /**
   * Gets the square footage of the building.
   *
   * @returns {Number} The square footage of the building.
   */
  get sqft () {
    return this._sqft;
  }

  /**
   * Gets the number of floors in the building.
   *
   * @returns {Number} The number of floors in the building.
   */
  get floors () {
    return this._floors;
  }

  /**
   * Overrides the evacuationWarningMessage method.
   * Returns a string indicating the evacuation warning for the skyscraper.
   *
   * @returns {String} The evacuation warning message.
   */
  evacuationWarningMessage () {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
