//This is test suite
describe("calcPoints Test Suite", function () {
    it("Test Case 1", function () {
        let dealerHand = [
            {
                displayVal: '8',
                val: 8,
                suite: 'hearts'
            },
            {
                displayVal: '4',
                val: 4,
                suite: 'hearts'
            }
        ];

        var result = calcPoints(dealerHand);
        expect(result.total).toEqual(12);
        expect(result.isSoft).toEqual(false);
    });

    it("Test Case 2", function () {
        let dealerHand = [
            {
                displayVal: '8',
                val: 8,
                suite: 'hearts'
            },
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'hearts'
            }
        ];

        var result = calcPoints(dealerHand);
        expect(result.total).toEqual(19);
        expect(result.isSoft).toEqual(true);
    });

    it("Test Case 3", function () {
        let dealerHand = [
            {
                displayVal: 'Queen',
                val: 10,
                suite: 'hearts'
            },
            {
                displayVal: '2',
                val: 2,
                suite: 'spades'
            },
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'hearts'
            }
        ];

        var result = calcPoints(dealerHand);
        expect(result.total).toEqual(13);
        expect(result.isSoft).toEqual(false);
    });

    it("Test Case 4", function () {
        let dealerHand = [
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'spades'
            },
            {
                displayVal: '2',
                val: 2,
                suite: 'spades'
            },
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'hearts'
            }
        ];

        var result = calcPoints(dealerHand);
        expect(result.total).toEqual(14);
        expect(result.isSoft).toEqual(true);
    });

    it("Test Case 5", function () {
        let dealerHand = [
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'spades'
            },
            {
                displayVal: 'Queen',
                val: 10,
                suite: 'spades'
            },
            {
                displayVal: 'Ace',
                val: 11,
                suite: 'hearts'
            }
        ];

        var result = calcPoints(dealerHand);
        expect(result.total).toEqual(12);
        expect(result.isSoft).toEqual(false);
    });
});

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

