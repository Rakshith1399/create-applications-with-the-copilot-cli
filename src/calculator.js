#!/usr/bin/env node

/**
 * Node.js CLI Calculator..
 * 
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <operation> <num1> <num2>
 * Example: node calculator.js add 5 3
 */

const args = process.argv.slice(2);

if (args.length < 3) {
  console.error('Usage: calculator <operation> <num1> <num2>');
  console.error('Operations: add, subtract, multiply, divide');
  process.exit(1);
}

const operation = args[0].toLowerCase();
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Error: Both arguments must be valid numbers');
  process.exit(1);
}

let result;

switch (operation) {
  case 'add':
  case '+':
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;
  case 'subtract':
  case '-':
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case 'multiply':
  case '*':
  case 'x':
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;
  case 'divide':
  case '/':
    if (num2 === 0) {
      console.error('Error: Division by zero is not allowed');
      process.exit(1);
    }
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
    break;
  default:
    console.error(`Error: Unknown operation "${operation}"`);
    console.error('Supported operations: add, subtract, multiply, divide');
    process.exit(1);
}
