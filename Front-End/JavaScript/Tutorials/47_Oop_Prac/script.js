// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 28/5/2024  Time: 4:21Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: OOP Practice Questions                                              ***
// #***                                                                                  ***
// #****************************************************************************************
// 1: Create a class and find out it's complex number

// class Complex {
//     constructor(real, imaginary) {
//       this.real = real
//       this.imaginary = imaginary
//     }
//     add(num) {
//       this.real = this.real + num.real
//       this.imaginary = this.imaginary + num.imaginary
  
//     }
  
//     get real() {
//       return this._real
//     }
  
//     get imaginary() {
//       return this._imaginary
//     }
  
//     set imaginary(newImaginary) {
//       this._imaginary = newImaginary
//     }
  
//     set real(newReal) {
//       this._real = newReal
//     }
//   }
  
//   let a = new Complex(2, 4)
//   console.log(a.real, a.imaginary)
//   a.real = 10
//   a.imaginary = 10
//   let b = new Complex(6, 2)
//   a.add(b)
//   console.log(`${a.real}+${a.imaginary}i`)

class Human{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    walk(){
        console.log(`${this.name} Human is walking`);
        
    }
} 
class Student extends Human{
    walk(){
        console.log(`${this.name} student is walking`);
        
    }
}
let obj1 = new Human("Shiraz",21);
let o = new Student("Abdullah",22);
obj1.walk();
o.walk(); 
console.log(o instanceof Student);
