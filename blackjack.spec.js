describe('Test Black Jack Game', () => {
  describe('Test function dealerShouldDraw', () => {
    // 1- Dealer hand: 10, 9
    const dealerHand_10_9 = [
      { val: 10, displayVal: "10", suit: "hearts" },
      { val: 9, displayVal: "9", suit: "hearts" }
    ];

    // 2- Dealer hand: Ace, 6
    const dealerHand_Ace_6 = [
      { val: 11, displayVal: "Ace", suit: "hearts" },
      { val: 6, displayVal: "6", suit: "hearts" }
    ];

    // 3- Dealer hand: 10, 6, Ace
    const dealerHand_10_6_Ace = [
      { val: 10, displayVal: "10", suit: "hearts" },
      { val: 6, displayVal: "6", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" }
    ];

    // 4- Dealer hand: 2, 4, 2, 5
    const dealerHand_2_4_2_5 = [
      { val: 2, displayVal: "2", suit: "hearts" },
      { val: 4, displayVal: "4", suit: "hearts" },
      { val: 2, displayVal: "2", suit: "diamonds" },
      { val: 5, displayVal: "5", suit: "hearts" }
    ];

    // 1- Dealer hand: 10 & 9
    it('1- It should return false if dealer hand has 10 & 9', () => {
      const result = dealerShouldDraw(dealerHand_10_9);
      expect(result).toEqual(false);
    });

    // 2- Dealer hand: Ace, 6
    it('2- It should return true if dealer hand has an Ace & 6', () => {
      const result = dealerShouldDraw(dealerHand_Ace_6);
      expect(result).toEqual(true);
    });

    // 3- Dealer hand: 10, 6, Ace
    it('3- It should return false if dealer hand has an 10, 6 & Ace', () => {
      const result = dealerShouldDraw(dealerHand_10_6_Ace);
      expect(result).toEqual(false);
    });

    // 4- Dealer hand: 2, 4, 2, 5
    it('4- It should return true if dealer hand has an 2, 4, 2 & 5', () => {
      const result = dealerShouldDraw(dealerHand_2_4_2_5);
      expect(result).toEqual(true);
    });

  });
});