// Indexes of card values in a generated deck.
const card2 = 4;
const card4 = 6;
const card5 = 7;
const card6 = 8;
const card9 = 11;
const card10 = 12;
const cardAce = 3;

// dealerShouldDraw ///////////////////////////////////////////////////////////
describe("dealerShouldDraw function:", () => {
    // Make a test deck.
    let testDeck = getDeck();
    // Test dealerShouldDraw with various hand compositions.
    it("Should return false with hand: 10, 9.", () => {
        const testHand = 
            [testDeck[card10], testDeck[card9]];
        const result = dealerShouldDraw(testHand);
        expect(result).toEqual(false);
    });
    it("Should return true with hand: ace, 6.", () => {
        const testHand = 
            [testDeck[cardAce], testDeck[card6]];
        const result = dealerShouldDraw(testHand);
        expect(result).toEqual(true);
    });
    it("Should return false with hand: 10, 6, ace.", () => {
        const testHand = 
            [testDeck[card10], testDeck[card6], testDeck[cardAce]];
        const result = dealerShouldDraw(testHand);
        expect(result).toEqual(false);
    });
    it("Should return true with hand: 2, 4, 2, 5.", () => {
        const testHand = 
            [testDeck[card2], testDeck[card4], testDeck[card2], 
            testDeck[card5]];
        const result = dealerShouldDraw(testHand);
        expect(result).toEqual(true);
    });
});