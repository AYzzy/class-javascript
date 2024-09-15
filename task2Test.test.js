let increase = require("./task2")

test("increraseByFive", ()=>{
    let grade =[85, 92, 78, 88, 95]
    let result=increase(grade)
    expect(result).toEqual([90,97,83,93,100])
})