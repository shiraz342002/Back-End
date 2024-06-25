// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
class Shape{
    constructor(len,wid){
        this.len=len;
        this.wid=wid;
    }
    Calc_Area(){
        return this.len*this.wid
    }
   
}
class Circle extends Shape{
    Calc_Area(radius){
        return (3.14*Math.sqrt(radius))
    }
}
class Triangle extends Shape{
    Calc_Area(base,height){
        return (1/2*base*height);
    }
}

let obj = new Circle();
let obj1 = new Triangle();

console.log("The Area of Circle is :"+obj.Calc_Area(4));
console.log("The Area of Triangle is "+obj1.Calc_Area(6,7));
