const { add, subtract, multiply, divide } = require('./calculator');

test('addition', () => {
  expect(add(5, 8)).toBe(13);
});

test('subtraction', () => {
  expect(subtract(18, 8)).toBe(15);
});

test('multiplication', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('division', () => {
  expect(divide(70, 2)).toBe(35);
});

test('division by zero', () => {
  expect(divide(500, 0)).toBe('Cannot divide by zero');
});
