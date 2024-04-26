let {addNumbers,evenNumbers,studentScores} = require("./add.js")


test("Add two numbers", () =>{
    let a = 3
    let b = 5
    let answer = addNumbers(a,b)  

    expect (answer).toBe(8) 
})

test("Filter even numbers", ()=>{
    let arr =[1,2,3,4,5,6,7,8]
    let answer = evenNumbers(arr)
    expect(answer).toEqual([2,4,6,8])
})

// test("studentScore",()=>{
//     let arr = 85
//     let answer = studentScores(arr)
//     expect(answer).toEqual("C")
// })