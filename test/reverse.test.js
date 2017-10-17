const { reverse } = require('../lib');

test('reverses a string', () => {
  expect(reverse('Blake Guilloud')).toBe('doulliuG ekalB');
});

test('reverses an integer', () => {
  expect(reverse(47109)).toBe(90174);
});