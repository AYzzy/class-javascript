
class rectangle extends shape{
  constructor(name, side1,side2){
    this.name=name
    this.side1=side1
    this.side2=side2
  }
  setSide1(newSide1){
    this.side1 = newSide1
  }
  getSide1(){
    return this.side1
  }
  setSide2(){
    this.side2 = newSide2
  }
  getSide2(){
    return this.side2
  }
  getArea(){
    return side1 * side2
  }
  isSquare(){
    return this.getArea()==this.getSide1 * this.side1
  }
}

module.exports=rectangle