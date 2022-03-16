describe('Blackjack unit testing',  () => {
  describe('Test dealerShouldDraw function return values', () => {
    const noAceHandOne = [
      { val: 10, displayVal: "10", suit: "hearts" },
      { val: 9, displayVal: "9", suit: "hearts" }
    ];

    const aceHandOne = [
      { val: 11, displayVal: "Ace", suit: "hearts" },
      { val: 6, displayVal: "6", suit: "hearts" }
    ];

    const aceHandTwo = [
      { val: 10, displayVal: "10", suit: "hearts" },
      { val: 6, displayVal: "6", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" }
    ];

    const noAceHandTwo = [
      { val: 2, displayVal: "2", suit: "hearts" },
      { val: 4, displayVal: "4", suit: "hearts" },
      { val: 2, displayVal: "2", suit: "hearts" },
      { val: 5, displayVal: "5", suit: "hearts" }
    ];

    it("Should return...", () => {
      expect(dealerShouldDraw(noAceHandOne)).toEqual(false);
      expect(dealerShouldDraw(aceHandOne)).toEqual(true);
      expect(dealerShouldDraw(aceHandTwo)).toEqual(false);
      expect(dealerShouldDraw(noAceHandTwo)).toEqual(true);
    })
  })
})