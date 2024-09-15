let square= require("./task3.js")

test("squareOfNumber",()=>{
    let number= [2,4,6,8,10]
    let result = square(number)
    expect(result).toEqual([4,16,36,64,100])
})