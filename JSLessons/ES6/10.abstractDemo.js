//abstract shape class
class Shape{
  constructor(){
    if(new.target === Shape){
       throw new Error('Cannot instantiate abstract class Shape.');
    }
  }
  //abstract method
  //calculateArea();
  calculateArea() {
    throw new Error('Method calculateArea must be implemented. ');
  }
}

//concrete subclass Circle
class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }

    //Implementing abstract method
    calculateArea(){
        return Math.PI * this.radius ** 2;
    }
}

//concrete subclass Rectangle 
class Rectangle extends Shape{
    constructor(width,height=3){
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(){
      return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(5);
console.log('Circle area: ',circle.calculateArea());

console.log('Rectangle area: ',rectangle.calculateArea());

