// unit testing function
// to test dealerShouldDraw function in blackjack.js

describe('DealerShouldDraw', function () {
    // build data structure for test cases
    const case1 = [{suit: 'hearts', val: 10, displayVal: '10'}, {suit: 'clubs', val: 9, displayVal: '9'}];   
    const case2 = [{suit: 'diamonds', val: 11, displayVal: 'Ace'}, {suit: 'spades', val: 6, displayVal: '6'}];
    const case3 = [{suit: 'spades', val: 10, displayVal: '10'}, {suit: 'clubs', val: 6, displayVal: '6'},{suit: 'hearts', val: 11, displayVal: 'Ace'}];   
    const case4 = [{suit: 'hearts', val: 2, displayVal: '2'}, {suit: 'spades', val: 4, displayVal: '4'},{suit: 'diamonds', val: 2, displayVal: '2'}, {suit: 'clubs', val: 5, displayVal: '5'}];
    
    it('Determine if Dealer should draw another card - test case 1 - expect false', function () {
        const val = dealerShouldDraw(case1);
        expect(val).toBe(false);
    });
    it('Determine if Dealer should draw another card - test case 2 - expect true', function () {
        const val = dealerShouldDraw(case2);
        expect(val).toBe(true);
    });
    it('Determine if Dealer should draw another card - test case 3 - expect false', function () {
        const val = dealerShouldDraw(case3);
        expect(val).toBe(false);
    });
    it('Determine if Dealer should draw another card - test case 4 - expect true', function () {
        const val = dealerShouldDraw(case4);
        expect(val).toBe(true);
    });
    }
);