const { add } = require('./calculator');

test('adds two positive numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});
