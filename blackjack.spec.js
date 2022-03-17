describe('Blackjack Game', () => {

    describe('dealerShouldDraw Function', () => {

        const drawAtNineteen = [
            {val: 10, displayVal: '10', suit: 'hearts'},
            {val: 9, displayVal: '9', suit: 'hearts'}
        ]

        const drawAtSeven = [
            {val: 1, displayVal: 'Ace', suit: 'hearts'},
            {val: 6, displayVal: '6', suit: 'hearts'}
        ]

        const drawAtSeventeen = [
            {val: 10, displayVal: '10', suit: 'hearts'},
            {val: 6, displayVal: '6', suit: 'hearts'},
            {val: 1, displayVal: 'Ace', suit: 'hearts'}
        ]

        const drawAtThirteen = [
            {val: 2, displayVal: '2', suit: 'hearts'},
            {val: 4, displayVal: '4', suit: 'hearts'},
            {val: 2, displayVal: '2', suit: 'hearts'},
            {val: 5, displayVal: '5', suit: 'hearts'}
        ]

        it('should return false if greater or equal to 17. Testing 19.', () => {
            const points = calcPoints(drawAtNineteen);
            expect(points.total).toEqual(19);
            
            const result = dealerShouldDraw(drawAtNineteen);
            expect(result).toEqual(false);
        })

        it('should return true if less than 17. Testing 7.', () => {
            // Will draw because it is still a 'soft' card.
            const result = dealerShouldDraw(drawAtSeven);
            expect(result).toEqual(true);
        })

        it('should return false if greater or equal to 17. Testing 17.', () => {
            const points = calcPoints(drawAtSeventeen);
            expect(points.total).toEqual(17);

            const result = dealerShouldDraw(drawAtSeventeen);
            expect(result).toEqual(false);
        })

        it('should return true if less than 17. Testing 13.', () => {
            const points = calcPoints(drawAtThirteen);
            expect(points.total).toEqual(13);

            const result = dealerShouldDraw(drawAtThirteen);
            expect(result).toEqual(true)
        })
    })
})