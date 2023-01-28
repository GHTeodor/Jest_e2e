const validateValue = require('./validateValue');

describe('validateValue', function () {
    test('is 50 true', () =>
        expect(validateValue(50)).toBe(true));
    test('is 50 false', () =>
        expect(validateValue(-1)).toBe(false));
    test('is 50 false', () =>
        expect(validateValue(101)).toBe(false));
});
