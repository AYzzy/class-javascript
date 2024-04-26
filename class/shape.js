const rectangle = require("./rectangle")

class shape{
  constructor(name){
    this.name = name
  }
  setName(newName){
    this.name=newName
  }
  getName(){
    return this.name
  }
}
module.exports = rectangle

