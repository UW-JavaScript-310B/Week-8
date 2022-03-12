describe("BlackJack Game", () => {
    describe("dealerShouldDraw Function", () => {
        // 10, 9 passed in to function should return false
        it("Should return false", () =>{
            const hand = [
                {val: 10, displayVal: "10", suit: "hearts"},
                {val: 9, displayVal: "9", suit: "hearts"}
            ];
            expect(dealerShouldDraw(hand)).toBe(false);
        })
        // Ace, 6 passed in to function should return true
        it("Should return false", () =>{
            const hand = [
                {val: 1, displayVal: "ace", suit: "hearts"},
                {val: 6, displayVal: "6", suit: "hearts"}
            ];
            expect(dealerShouldDraw(hand)).toBe(true);
        })
        // 10, 6, Ace passed in to function should return false
        it("Should return false", () =>{
            const hand = [
                {val: 10, displayVal: "10", suit: "hearts"},
                {val: 6, displayVal: "6", suit: "hearts"},
                {val: 1, displayVal: "ace", suit: "hearts"}
            ];
            expect(dealerShouldDraw(hand)).toBe(false);
        })
        // 2, 4, 2, 5 passed in should return true
        it("Should return true", () =>{
            const hand = [
                {val: 2, displayVal: "2", suit: "hearts"},
                {val: 4, displayVal: "4", suit: "hearts"},
                {val: 2, displayVal: "2", suit: "hearts"},
                {val: 5, displayVal: "5", suit: "hearts"}
            ];
            expect(dealerShouldDraw(hand)).toBe(true);
        })
    })
})