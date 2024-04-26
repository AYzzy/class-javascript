function Person(name,age){
  this.name = name
  this.age = age

  this.sayName = function(){
      console.log(this.name)
  }
}

const PersonOne = new Person("Jumoke", 13)
const PersonTwo = new Person("A Yzzy", 25)
console.log(PersonOne.name)
console.log(PersonTwo.name)