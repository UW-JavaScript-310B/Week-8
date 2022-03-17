describe("Test the soccer function", ()=>{
    describe("testing getTotalPoints function",()=>{
        it("should return number value",()=>{
            const result = getTotalPoints('wwl');
            expect(typeof result).toEqual("number");
        })
  
    it("should return 6 for 3 wins",()=>{
        const result = getTotalPoints('ww');
        expect(result).toEqual(6)
    })

})

 
})