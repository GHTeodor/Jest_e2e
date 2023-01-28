const delay = require('./delay');

describe('delay', () => {
    test('5 + 1', async () => {
        const sum = await delay(() => 5 + 1, 1000);
        expect(sum).toBe(6);
    });
});
