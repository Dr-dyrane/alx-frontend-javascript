/**
 * Returns a description of San Francisco, including income, GDP, and capita information for a specific year.
 *
 * @returns {string} A formatted string describing San Francisco's economic details.
 */
export default function getSanFranciscoDescription () {
  /**
     * The year for which the economic details are provided.
     *
     * @type {number}
     */
  const year = 2017;

  /**
     * Budget information including income, GDP, and capita.
     *
     * @type {Object}
     * @property {string} income - The income of San Francisco.
     * @property {string} gdp - The GDP of San Francisco.
     * @property {string} capita - The per capita income of San Francisco.
     */
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479'
  };

  /**
     * A formatted string describing San Francisco's economic details for the specific year.
     *
     * @type {string}
     */
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
