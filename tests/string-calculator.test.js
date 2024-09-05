const stringCalculator = require('../src/string-calculator');

test('should return 0 for an empty string', () => {
  expect(stringCalculator.add('')).toBe(0);
});

test('should return the number itself for a single number', () => {
  expect(stringCalculator.add('1')).toBe(1);
});

test('should return the sum of two numbers', () => {
  expect(stringCalculator.add('1,2')).toBe(3);
});

test('should handle multiple numbers', () => {
  expect(stringCalculator.add('1,2,3,4')).toBe(10);
});

test('should handle new line as a separator', () => {
  expect(stringCalculator.add('1\n2,3')).toBe(6);
});

test('should support custom delimiters', () => {
  expect(stringCalculator.add('//;\n1;2')).toBe(3);
});

test('should throw an error for negative numbers', () => {
  expect(() => stringCalculator.add('1,-2,3,-4')).toThrow('Negative Number Not Allowed: -2, -4');
});