describe("Test the soccer program", () => {
    describe("Test total points", () => {
        it("Should return a number", () => {
            const result = getTotalPoints('w')
            expect(typeof result).toEqual('number')
        })

        it("Should return 6 for 2 wins", () => {
            const result = getTotalPoints('ww')
            expect(result).toEqual(6)
        })

    })
    describe("Test for order teams", () => {
        const teamsArray = [
            {name: 'Sounders',results: 'wwdl'},
            {name: 'Galaxy',results: 'wlld'}
        ];
 
        it("Should return a string", () => {
            const result = orderTeams('')
            expect(result).toEqual("Sounders: 7 \n Galaxy: 4")

        });

    })

});