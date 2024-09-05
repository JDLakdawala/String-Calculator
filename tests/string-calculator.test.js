const stringCalculator = require('../src/string-calculator');

test('should return 0 for an empty string', () => {
  expect(stringCalculator.add('')).toBe(0);
});