/**
 * Function to get the first task description.
 *
 * @returns {string} The task description.
 */
export function taskFirst () {
  /**
   * Using const for a constant value.
   *
   * @type {string}
   */
  const task = 'I prefer const when I can.';

  // Returning the task description
  return task;
}

/**
 * Function to get the last part of a statement.
 *
 * @returns {string} A constant message.
 */
export function getLast () {
  // Returning a constant message
  return ' is okay';
}

/**
 * Function to combine the first task with the last statement.
 *
 * @returns {string} The combined string.
 */
export function taskNext () {
  /**
   * Initializing a variable for combining strings.
   *
   * @type {string}
   */
  let combination = 'But sometimes let';

  // Concatenating the result of the getLast() function
  combination += getLast();

  // Returning the combined string
  return combination;
}
