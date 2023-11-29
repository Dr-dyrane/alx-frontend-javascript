/**
 * Calculates the sum of initialNumber, expansion1989, and expansion2019.
 *
 * @param {number} initialNumber - The initial number to start the sum.
 * @param {number} [expansion1989=89] - The expansion value for the year 1989.
 * @param {number} [expansion2019=19] - The expansion value for the year 2019.
 * @returns {number} The calculated sum.
 */
export default function getSumOfHoods (initialNumber, expansion1989 = 89, expansion2019 = 19) {
  // Calculate the sum by adding the initialNumber, expansion1989, and expansion2019
  const sum = initialNumber + expansion1989 + expansion2019;

  // Return the calculated sum
  return sum;
}
