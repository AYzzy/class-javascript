
let number = [1,2,3,4,5]
number.push(2)
console.log(number)

let numbers = [1,2,3,4,5]
numbers.pop()
console.log(numbers)

let number1 = [1,2,3,4]
number1.shift()
console.log(number1)


let number2 = [1,2,3,4]
number2.unshift(6)
console.log(number2)

let num = [1,2,3,4,5]
console.log(num.slice(1,4))
console.log(num.splice(1,4))

let num1 = [1,2,3,4,5]
console.log(num1.splice(2))

let num2 = [1,2,3,4,5,6]
console.log(num2.splice(2,2))
console.log(num2)

let num3 = [1,2,3,4,5]
num3.splice(2,1,2,3)
console.log(num3)

let numm = [1,2,3,4,5,9,4,5]
let numOne = [2,3,4]
console.log(numm.concat(numOne))
console.log(numm)
