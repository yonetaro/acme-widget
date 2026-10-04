const reverseString = require('../reverseString');

describe('reverseString', () => {
  test('reverses a normal string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('returns the same value for a palindrome', () => {
    expect(reverseString('level')).toBe('level');
  });

  test('returns an empty string for empty input', () => {
    expect(reverseString('')).toBe('');
  });
});





