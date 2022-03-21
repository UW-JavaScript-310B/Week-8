describe("BlackJack Game", ()=>{
    describe ("calcPoints Function", ()=>{
        const noAceHand = [
            { val: 5, displayVal: "5", suit: "hearts"},
            { val: 10, displayVal: "10", suit: "hearts"}
        ];

        const oneAceSoftHand = [
            { val: 11, displayVal: "Ace", suit: "hearts"},
            { val: 6, displayVal: "6", suit: "hearts"}
        ];

        const oneAceHardHand = [
            { val: 11, displayVal: "Ace", suit: "hearts"},
            { val: 6, displayVal: "6", suit: "hearts"},
            { val: 3, displayVal: "3", suit: "hearts"},
            { val: 10, displayVal: "10", suit: "hearts"},
        ];

        const multAceSoftHand = [
            { val: 11, displayVal: "Ace", suit: "hearts"},
            { val: 11, displayVal: "Ace", suit: "hearts"},
            { val: 6, displayVal: "6", suit: "hearts"}
        ];

        const multAceHardHand = [
            { val: 11, displayVal: "Ace", suit: "hearts"},
            { val: 11, displayVal: "Ace", suit: "hearts"},
            { val: 8, displayVal: "8", suit: "hearts"},
            { val: 8, displayVal: "8", suit: "hearts"}
        ];

        it("should return . . . if no aces", ()=>{
            const result = calcPoints(noAceHand);

            expect(result.total).toEqual(15);
            expect(result.isSoft).toEqual(false); //returns true
        });
        it("should return . . .", ()=>{
            const result = calcPoints(oneAceSoftHand);

            expect(result.total).toEqual(17);
            expect(result.isSoft).toEqual(true);
        });
        it("should return . . .", ()=>{
            const result = calcPoints(oneAceHardHand);

            expect(result.total).toEqual(20); // returns 30
            expect(result.isSoft).toEqual(false); 
        });
        it("should return . . .", ()=>{
            const result = calcPoints(multAceSoftHand);

            expect(result.total).toEqual(18); // returns 28
            expect(result.isSoft).toEqual(true); // returns false
        });
        it("should return . . .", ()=>{
            const result = calcPoints(multAceHardHand);

            expect(result.total).toEqual(18); //returns 38
            expect(result.isSoft).toEqual(false);
        });
    });
    describe ("dealerShouldDraw Function", ()=>{
        const handOne = [
            { val: 10, displayVal: "10", suit: "hearts"},
            { val: 9, displayVal: "9", suit: "hearts"}
        ];
        const handTwo = [
            { val: 11, displayVal: "Ace", suit: "hearts"},
            { val: 6, displayVal: "6", suit: "hearts"}
        ];
        const handThree = [
            { val: 10, displayVal: "10", suit: "hearts"},
            { val: 6, displayVal: "6", suit: "hearts"},
            { val: 11 , displayVal: "Ace ", suit: "hearts"}
        ];
        const handFour = [
            { val: 2, displayVal: "2", suit: "hearts"},
            { val: 4, displayVal: "4", suit: "hearts"},
            { val: 2, displayVal: "2", suit: "hearts"},
            { val: 5 , displayVal: "5 ", suit: "hearts"}
        ];

        it("should return . . .", ()=>{
            const result = dealerShouldDraw(handOne);

            expect(false);
        });
        it("should return . . .", ()=>{
            const result = dealerShouldDraw(handTwo);

            expect(true);
        });
        it("should return . . .", ()=>{
            const result = dealerShouldDraw(handThree);

            expect(false);
        });
        it("should return . . .", ()=>{
            const result = dealerShouldDraw(handFour);

            expect(true);
        });
    });
});