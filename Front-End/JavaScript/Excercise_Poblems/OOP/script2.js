// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.
class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height;
    }
   Rectangle_Area(){
    return this.width*this.height;
   }
   Perimeter(){
    return 2*(this.width+this.height)
   }
}

let obj1 = new Rectangle(12,45)
let obj2 = new Rectangle(8,15)
console.log("The Rectangle Area is :",obj1.Rectangle_Area());
console.log("The perimeter is :",obj1.Perimeter());
