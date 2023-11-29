/**
 * Returns a budget object with income, GDP, and capita properties.
 *
 * @param {string} income - The income value to be included in the budget object.
 * @param {string} gdp - The GDP value to be included in the budget object.
 * @param {string} capita - The capita value to be included in the budget object.
 * @returns {Object} The budget object containing income, GDP, and capita properties.
 */
export default function getBudgetObject (income, gdp, capita) {
  /**
     * The budget object containing income, GDP, and capita properties.
     *
     * @type {Object}
     * @property {string} income - The income value.
     * @property {string} gdp - The GDP value.
     * @property {string} capita - The capita value.
     */
  const budget = {
    income,
    gdp,
    capita
  };

  // Returning the budget object
  return budget;
}
