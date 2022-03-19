// 1. Create unit tests with Jasmine to test the following cases:

// 10, 9 passed in to function should return false
// Ace, 6 passed in to function should return true
// 10, 6, Ace passed in to function should return false
// 2, 4, 2, 5 passed in should return true

describe("dealeShouldDraw tests", () => {
  it("should return false when 10, 9 ", () => {
    const dealerHand = [
      { val: 9, displayVal: "5", suit: "hearts" },
      { val: 10, displayVal: "Jack", suit: "hearts" },
    ];

    const response = dealerShouldDraw(dealerHand);
    expect(response).toEqual(false);
  });

  it("should return true when Ace, 6 ", () => {
    const dealerHand = [
      { val: 6, displayVal: "6", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" },
    ];

    const response = dealerShouldDraw(dealerHand);
    expect(response).toEqual(true);
  });

  it("should return false when Ace, 6, 10 ", () => {
    const dealerHand = [
      { val: 6, displayVal: "6", suit: "hearts" },
      { val: 10, displayVal: "10", suit: "hearts" },
      { val: 11, displayVal: "Ace", suit: "hearts" },
    ];

    const response = dealerShouldDraw(dealerHand);
    expect(response).toEqual(false);
  });

  it("should return false when 2, 4, 2, 5 ", () => {
    const dealerHand = [
      { val: 2, displayVal: "2", suit: "hearts" },
      { val: 4, displayVal: "4", suit: "hearts" },
      { val: 2, displayVal: "2", suit: "diamonds" },
      { val: 5, displayVal: "5", suit: "hearts" },
    ];

    const response = dealerShouldDraw(dealerHand);
    expect(response).toEqual(true);
  });
});

// if (handScore <= 11 && hasAce) {
//     handScore += 10;
//     isSoft = true;
//   }

// const dealerShouldDraw = function(dealerHand) {
//     let points = calcPoints(dealerHand).total;
//     let isSoft = calcPoints(dealerHand).isSoft;
//     if (points < 17 || (points === 17 && isSoft)) {
//       return true;
//     } else {
//       return false;
//     }
//   };
