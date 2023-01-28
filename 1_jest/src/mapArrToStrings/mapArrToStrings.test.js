const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrIntegersToStrings', function () {
    test('[1, 2, 3] -> ["1", "2", "3"]', () =>
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']));
    test('[null, undefined, false, "1"] -> []', () =>
        expect(mapArrToStrings([null, undefined, false, '1'])).toEqual([]));
    test('[] -> []', () =>
        expect(mapArrToStrings([])).toEqual([]));
});
