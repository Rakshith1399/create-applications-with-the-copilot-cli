const { add, subtract, multiply, divide } = require('../calculator-lib');

describe('Calculator - Basic Operations', () => {
  
  // ============================================
  // ADDITION TESTS
  // ============================================
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
      expect(add(-10, 5)).toBe(-5);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
      expect(add(1.1, 2.2)).toBeCloseTo(3.3, 5);
    });

    test('should add large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // ============================================
  // SUBTRACTION TESTS
  // ============================================
  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(5, 0)).toBe(5);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract positive and negative numbers', () => {
      expect(subtract(10, -5)).toBe(15);
      expect(subtract(-10, 5)).toBe(-15);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.5)).toBe(7);
      expect(subtract(5.5, 2.2)).toBeCloseTo(3.3, 5);
    });

    test('should result in negative when subtracting larger from smaller', () => {
      expect(subtract(3, 10)).toBe(-7);
    });
  });

  // ============================================
  // MULTIPLICATION TESTS
  // ============================================
  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 100)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 5)).toBe(5);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(10, -5)).toBe(-50);
      expect(multiply(-10, 5)).toBe(-50);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
      expect(multiply(1.5, 2.5)).toBeCloseTo(3.75, 5);
    });

    test('should multiply large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  // ============================================
  // DIVISION TESTS
  // ============================================
  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide and return decimal result', () => {
      expect(divide(10, 4)).toBe(2.5);
      expect(divide(7, 2)).toBe(3.5);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide by one', () => {
      expect(divide(5, 1)).toBe(5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(10, -5)).toBe(-2);
      expect(divide(-10, 5)).toBe(-2);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 3.5)).toBe(3);
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should throw error on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle very small divisors', () => {
      expect(divide(1, 0.1)).toBe(10);
      expect(divide(5, 0.5)).toBe(10);
    });
  });

  // ============================================
  // IMAGE EXAMPLES TESTS
  // ============================================
  describe('Examples from Image (calc-basic-operations.png)', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  // ============================================
  // EDGE CASES AND SPECIAL SCENARIOS
  // ============================================
  describe('Edge Cases', () => {
    test('should handle operations with very small numbers', () => {
      expect(add(0.001, 0.002)).toBeCloseTo(0.003, 5);
      expect(subtract(0.01, 0.001)).toBeCloseTo(0.009, 5);
    });

    test('should handle mixed operations', () => {
      const result = add(multiply(5, 2), 3);
      expect(result).toBe(13);
    });

    test('should maintain precision for decimal operations', () => {
      expect(divide(1, 3)).toBeCloseTo(0.333333, 5);
      expect(multiply(3, 0.333333)).toBeCloseTo(0.999999, 5);
    });

    test('should handle negative zero', () => {
      expect(Object.is(add(0, -0), 0)).toBe(true);
      expect(Object.is(subtract(-0, 0), -0)).toBe(true);
    });
  });
});
