
describe("Test cards", () => {
    it("should not hit on 19", () => {
        expect(dealerShouldDraw([{val: 10}, {val: 9}])).toBe(false)
    })
    it("should hit on soft 17", () => {
        expect(dealerShouldDraw([{val: 11, displayVal: "Ace"}, {val: 6}])).toBe(true)
    })
    it("should not hit on normal 17", () => {
        expect(dealerShouldDraw([{val: 10}, {val: 6}, {val: 1}])).toBe(false)
    })
    it("should hit on 13", () => {
        expect(dealerShouldDraw([{val: 2}, {val: 4}, {val: 2}, {val: 5}])).toBe(true)
    })
})