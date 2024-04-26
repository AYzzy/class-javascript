class Dayo{
    constructor(name,age,size){
      this.name = name
      this.age = age
      this.size = size
    }
    static setName(newName){
      this.name = newName
    }
    getName(){
      return this.name
    }
    setAge(anyAge){
      this.age = anyAge
    }
    getAge(){
      return this.age
    }
    setSize(shoeSize){
      this.size = shoeSize
    }
    getAge(){
      return this.size
    }
}

let ayomide = new Dayo()
console.log(ayomide)