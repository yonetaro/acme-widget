const sum = require('../sum');
test('adds 2 + 2 = 5 (wrong on purpose)', () => {
    expect(sum(2, 2)).toBe(5);
});
