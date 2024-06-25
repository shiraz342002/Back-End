// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 28/5/2024  Time: 12:01 AM     Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Inheritance in Js                                                   ***
// #***                                                                                  ***
// #****************************************************************************************

// multiple classes ko apas me jorne ke liye inheritence hoti taake parent class ka code child me reuse ho sake

class Animal {
  constructor(name) {
      this.name = name;
  }

  speak() {
      console.log(`${this.name} makes a sound.`);
  }
}


class Dog extends Animal {
  speak() {
      console.log(`${this.name} barks.`);
  }
}


let myDog = new Dog('Rex');
myDog.speak();  
