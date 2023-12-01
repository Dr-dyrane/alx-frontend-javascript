import getBudgetObject from './7-getBudgetObject';

/**
 * Returns a full budget object with additional methods for formatting income in dollars and euros.
 *
 * @param {string} income - The income value to be included in the budget object.
 * @param {string} gdp - The GDP value to be included in the budget object.
 * @param {string} capita - The capita value to be included in the budget object.
 * @returns {Object} The full budget object containing income, GDP,
 *                   - and capita properties along with additional methods.
 */
export default function getFullBudgetObject(income, gdp, capita) {
  /**
   * The budget object containing income, GDP, and capita properties.
   *
   * @type {Object}
   */
  const budget = getBudgetObject(income, gdp, capita);

  /**
   * The full budget object with additional methods for formatting income.
   *
   * @type {Object}
   * @property {string} income - The income value.
   * @property {string} gdp - The GDP value.
   * @property {string} capita - The capita value.
   * @property {Function} getIncomeInDollars - A method to format income in dollars.
   * @property {Function} getIncomeInEuros - A method to format income in euros.
   */
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      // Method to format income in dollars
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      // Method to format income in euros
      return `${income} euros`;
    },
  };

  // Returning the full budget object
  return fullBudget;
}
