describe('Dummy Test', function() {
    it('has a dummy spec to test 2 + 2: intentionally failing test ', function() {
        // An intentionally failing test. No code within expect() will never equal 4.
        expect().toEqual(4);
    });
});
