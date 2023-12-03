/**
 * Generates a Map representing a grocery shopping list with items and quantities.
 *
 * @returns {Map} - A Map containing grocery items as keys and their quantities as values.
 * @example
 * // Example usage:
 * const shoppingList = groceriesList();
 * console.log(shoppingList);
 * // Output:
 * // Map {
 * //   'Apples' => 10,
 * //   'Tomatoes' => 10,
 * //   'Pasta' => 1,
 * //   'Rice' => 1,
 * //   'Banana' => 5
 * // }
 */
export default function groceriesList() {
  // Return a new Map with grocery items and quantities
  return new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
}
