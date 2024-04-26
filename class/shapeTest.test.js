
const shape = require("./shape.js")

test("area of rectangle",()=>{
    let obj =[5,6]
    let result =shape[obj] 
    expect(result).toBe(30)
})