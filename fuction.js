// using nested function

// function calc(x){
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber
// }


// console.log(calc(3)(2))
// let result = calc(3);
// console.log(result(2))
// console.log(calc(3)(2))



// const calc = (x) =>{
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber
// }
// console.log(calc(3)(2))

function higherOrderFunction(func){
    console.log("higher function")
    func();
}
function lowerOrderFunction(func){
    console.log("lower function")
}
higherOrderFunction(lowerOrderFunction)


function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`;
    }
}
console.log(greetings("Good morning!")("John"));