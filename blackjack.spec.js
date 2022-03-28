//This is test suite
describe("dealerShouldDraw Test Suite", function () {

    it("Test Case 1", function () {
        let dealerHand = [
            {
                displayVal: '10',
                val: 10,
                suite: 'hearts'
            },
            {
                displayVal: '9',
                val: 9,
                suite: 'hearts'
            }
        ];

        expect(dealerShouldDraw(dealerHand)).toEqual(false);
    });

    it("Test Case 2", function () {
        let dealerHand = [
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'hearts'
            },
            {
                displayVal: '6',
                val: 6,
                suite: 'hearts'
            }
        ];

        expect(dealerShouldDraw(dealerHand)).toEqual(true);
    });

    it("Test Case 3", function () {
        let dealerHand = [
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'hearts'
            },
            {
                displayVal: '10',
                val: 10,
                suite: 'hearts'
            },
            {
                displayVal: '6',
                val: 6,
                suite: 'hearts'
            }
        ];

        expect(dealerShouldDraw(dealerHand)).toEqual(false);
    });

    it("Test Case 4", function () {
        let dealerHand = [
            {
                displayVal: '2',
                val: 2,
                suite: 'hearts'
            },
            {
                displayVal: '4',
                val: 4,
                suite: 'hearts'
            },
            {
                displayVal: '2',
                val: 2,
                suite: 'spades'
            },
            {
                displayVal: '5',
                val: 5,
                suite: 'hearts'
            }
        ];

        expect(dealerShouldDraw(dealerHand)).toEqual(true);
    });


});
describe("calPoints", function () {

    it("No Ace Test Case 1", function () {
        let dealerHand = [
            {
                displayVal: '10',
                val: 10,
                suite: 'hearts'
            },
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'hearts'
            }
        ];

        expect(calcPoints('true')).toEqual(false);
    });

});

