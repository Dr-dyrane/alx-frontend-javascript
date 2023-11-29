/**
 * Defines a function named getNeighborhoodsList.
 * Note: This function is intended to be used with the 'new' keyword to create an instance.
 *
 * @constructor
 */
export default function getNeighborhoodsList () {
  /**
     * Initialize an array property named sanFranciscoNeighborhoods with some default values.
     *
     * @type {string[]}
     */
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  /**
     * Define a method named addNeighborhood using an arrow function.
     *
     * @param {string} newNeighborhood - The new neighborhood to add to the array.
     * @returns {string[]} The updated array of San Francisco neighborhoods.
     */
  this.addNeighborhood = (newNeighborhood) => {
    // Add the new neighborhood to the sanFranciscoNeighborhoods array
    this.sanFranciscoNeighborhoods.push(newNeighborhood);

    // Return the updated array
    return this.sanFranciscoNeighborhoods;
  };
}
