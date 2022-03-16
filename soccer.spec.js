describe("Test soccer program", () => {
    describe("Test getTotalPoints", () => {
        it("Should return a number", () => {
            const result = getTotalPoints('w');
            expect(typeof result).toEqual('number');
        })

        it("Should return 6 for 2 wins", () => {
            const result = getTotalPoints('ww');
            expect(result).toEqual(6);
        })
    })
}
);