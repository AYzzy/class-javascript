let animal ={
    type: "Unkown",
    sound:function(){
      console.log("the "+ this.type+" make a sound")
    }
}

let dog = Object.create(animal)
dog.type = "Dog"
dog.colour = "brown"

let goat={
  colour: "black"
}
Object.setPrototypeOf(goat, animal)
goat.type = "Goat"
 console.log(goat)

dog.sound()
console.log(dog)

let vehicle = {wheels : 4}
let car = {
  seats :5,
  __proto__: vehicle,
  wheels:6

}

// console.log(`vehicle`, vehicle, vehicle.__proto__)
console.log(`Car`, car, car.__proto__)
// console.log(`car wheels`, car.wheels)