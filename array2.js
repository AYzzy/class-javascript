let main=[["car",2000 ],["truck",500],["bike",6500]]
console.log(main)
console.log(main[0][0])

let main2=[["car",2000],["truck",500],["bike",6500]]
main2.push(["Scooter",1500])
console.log(main2)

// let main1=[["car",2000,["Toyota","Nissan"]],["truck",500,["Ford"]],["bike",6500,["Honda"]]]

let main1=[["car",2000],["truck",500],["bike",6500]]
main1[0].push(["Toyota","Nissan"])
main1[1].push(["Ford"])
main1[2].push(["Honda"])
console.log(main1)

let math = [[200,50,300,5],[10,25,7,100],[25,20,70,45,],[500,170,11,35]]
console.log(math)
console.log(math[1].splice(0,3))

let me = [1,3,4,5,6]
let arra = []
let newAnswer = me.filter(num=> num % 2 == 0).map(num=>num*10) 
console.log(newAnswer)

let array =[1,3,4,5,6]
let arr=[]
let answer = array.forEach((num)=>{arr.push(num *3)})
console.log(arr)

let array2 =[1,3,4,5,6]
let answer2 = array2.map((num)=>num * 2)
console .log(answer2)