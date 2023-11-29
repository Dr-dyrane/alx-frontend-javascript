/**
 * Returns the current year.
 *
 * @returns {number} The current year.
 */
function getCurrentYear () {
  /**
     * Creating a new Date object to get the current date.
     *
     * @type {Date}
     */
  const date = new Date();

  // Returning the current year
  return date.getFullYear();
}

/**
   * Returns a budget object for the current year with income, GDP, and capita properties.
   *
   * @param {string} income - The income value to be included in the budget object.
   * @param {string} gdp - The GDP value to be included in the budget object.
   * @param {string} capita - The capita value to be included in the budget object.
   * @returns {Object} The budget object containing income, GDP, and capita properties for the current year.
   */
export default function getBudgetForCurrentYear (income, gdp, capita) {
  /**
     * The budget object for the current year containing income, GDP, and capita properties.
     *
     * @type {Object}
     * @property {string} income - The income value for the current year.
     * @property {string} gdp - The GDP value for the current year.
     * @property {string} capita - The capita value for the current year.
     */
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita
  };

  // Returning the budget object for the current year
  return budget;
}
