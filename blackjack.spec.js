describe("Test Blackjak program", () => {

    describe("Test Dealer Should Draw", () => {
        //Determine if dealer should draw again
        //if lesss than 17 or equals 17 but has an ACE, dealer draws
        // if over 17 with no ACE dealer does not draw again.

        it("Should return false", () => {
            // need two cards with value 9 and 10
            let testHand = [deck[11], deck[38]];
            const result = dealerShouldDraw(testHand); 
            expect(result).not.toBe(true);
        })

        it("Should return true for Ace and 6", () => {
            //need an Ace and 6
            testAceHand = [deck[29], deck[34]];
            const result = dealerShouldDraw(testAceHand);
            expect(result).toBe(true);
        })

        it("Should return false for 10, 6, Ace", () => {
            testSoftAce = [deck[12], deck[8], deck[29]];
            const result = dealerShouldDraw(testSoftAce);
            expect(result).not.toBe(true);
        })

        it("Should return true for 2,4,2,5", () => {
            testTooLow = [deck[4], deck[6], deck[17], deck[20]];
            const result = dealerShouldDraw(testTooLow);
            expect(result).toBe(true);
        })

    })


})