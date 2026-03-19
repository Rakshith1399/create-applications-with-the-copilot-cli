/**
 * Calculator Library - Core Functions
 * 
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

/**
 * Adds two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} The sum of num1 and num2
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * Subtracts two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Number to subtract
 * @returns {number} The difference (num1 - num2)
 */
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * Multiplies two numbers
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @returns {number} The product of num1 and num2
 */
function multiply(num1, num2) {
  return num1 * num2;
}

/**
 * Divides two numbers
 * @param {number} num1 - Dividend
 * @param {number} num2 - Divisor
 * @returns {number} The quotient (num1 / num2)
 * @throws {Error} If num2 is zero (division by zero)
 */
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return num1 / num2;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
