// 1. Create unit tests with Jasmine to test the following cases:

// 10, 9 passed in to function should return false
// Ace, 6 passed in to function should return true
// 10, 6, Ace passed in to function should return false
// 2, 4, 2, 5 passed in should return true

describe("Test the blackjack program", () => {

    describe("Test the dealer should draw function", () => {
        const test1 = [
            {suit: 'clubs', val: 10, displayVal: '10'},
            {suit: 'clubs', val: 9, displayVal: '9'},
        ]

        const test2 = [
            {suit: 'clubs', val: 11, displayVal: 'Ace'},
            {suit: 'clubs', val: 6, displayVal: '6'},
        ]

        const test3= [
            {suit: 'clubs', val: 10, displayVal: '10'},
            {suit: 'clubs', val: 6, displayVal: '6'},
            {suit: 'clubs', val: 11, displayVal: 'Ace'},
        ]

        const test4= [
            {suit: 'clubs', val: 2, displayVal: '2'},
            {suit: 'clubs', val: 4, displayVal: '4'},
            {suit: 'clubs', val: 2, displayVal: '2'},
            {suit: 'clubs', val: 5, displayVal: '5'},
        ]

        it("Should be false if 10, 9", ()=>{

            const result = dealerShouldDraw(test1)

            expect(result).toEqual(false)

        })

        it("Should be true if ace, 6", ()=>{

            const result = dealerShouldDraw(test2)

            expect(result).toEqual(true)

        })

        
        it("Should be false if 10, 6, ace", ()=>{

            const result = dealerShouldDraw(test3)

            expect(result).toEqual(false)

        })

        it("Should be true if 2,4,2,5 ", ()=>{

            const result = dealerShouldDraw(test4)

            expect(result).toEqual(true)

        })

    });
});

