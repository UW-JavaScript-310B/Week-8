describe("Test the blackjack program", () => {

    describe("Test the dealer should draw function", () => {
        const hand1 = [
            {suit: 'diamonds', val: 10, displayVal: '10'},
            {suit: 'clubs', val: 9, displayVal: '9'},
        ]

        const hand2 = [
            {suit: 'hearts', val: 11, displayVal: 'Ace'},
            {suit: 'spades', val: 6, displayVal: '6'},
        ]

        const hand3= [
            {suit: 'hearts', val: 10, displayVal: '10'},
            {suit: 'clubs', val: 6, displayVal: '6'},
            {suit: 'diamonds', val: 11, displayVal: 'Ace'},
        ]

        const hand4= [
            {suit: 'diamonds', val: 2, displayVal: '2'},
            {suit: 'hearts', val: 4, displayVal: '4'},
            {suit: 'clubs', val: 2, displayVal: '2'},
            {suit: 'spades', val: 5, displayVal: '5'},
        ]

        it("Should be false if hand includes 10, 9", ()=>{

            const result = dealerShouldDraw(hand1)

            expect(result).toEqual(false)

        })

        it("Should be true if hand includes Ace, 6", ()=>{

            const result = dealerShouldDraw(hand2)

            expect(result).toEqual(true)

        })

        
        it("Should be false if hand includes 10, 6, Ace", ()=>{

            const result = dealerShouldDraw(hand3)

            expect(result).toEqual(false)

        })

        it("Should be true if hand includes 2,4,2,5 ", ()=>{

            const result = dealerShouldDraw(hand4)

            expect(result).toEqual(true)

        })

    });
});