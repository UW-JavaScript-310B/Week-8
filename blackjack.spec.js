// Create unit tests with Jasmine to test the following cases:

// 10, 9 passed in to function should return false
// Ace, 6 passed in to function should return true
// 10, 6, Ace passed in to function should return false
// 2, 4, 2, 5 passed in should return true
const firstTestHand = [{val: 10, suit: 'hearts', displayVal: 'Jack'}, {val: 9, suit: 'hearts', displayVal: '9'}];
const secondTestHand = [{val: 11, suit: 'hearts', displayVal: 'Ace'}, {val: 6, suit: 'hearts', displayVal: '6'}];
const thirdTestHand = [{val: 10, suit: 'hearts', displayVal: 'Jack'}, {val: 11, suit: 'hearts', displayVal: 'Ace'},  {val: 6, suit: 'hearts', displayVal: '6'}];
const fourthTestHand = [{val: 2, suit: 'hearts', displayVal: '2'}, {val: 4, suit: 'spades', displayVal: '4'},  {val: 2, suit: 'spades', displayVal: '2'}, {val: 5, suit: 'spades', displayVal: '5'},];
console.log(blackjackDeck)


describe("test dealerShouldDraw func with certain passed params", ()=>{

    describe("testing with a 10 and 9", ()=>{
        it("should return false", () =>{
           let result = dealerShouldDraw(firstTestHand);
           console.log(result);
            expect(result).toBe(false);
        })     

    });

    describe("testing with an ace and 6", ()=>{
        it("should return true", () =>{
           let result = dealerShouldDraw(secondTestHand);

           console.log(result);

            expect(result).toBe(true);
        })     

    });


    describe("testing with an 10, 6, 11", ()=>{
        it("should return true", () =>{
           let result = dealerShouldDraw(thirdTestHand);

           console.log(result);

            expect(result).toBe(false);
        })     

    });

    describe("testing with a 2, 4, 2, 5 ", ()=>{
        it("should return true", () =>{
           let result = dealerShouldDraw(fourthTestHand);

           console.log(result);

            expect(result).toBe(true);
        })     

    });
    

})