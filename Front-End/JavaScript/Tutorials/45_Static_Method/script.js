// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 28/5/2024  Time: 1:15Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Static Methods                                                      ***
// #***                                                                                  ***
// #****************************************************************************************

// Static methods ise hum code ko reuse kar saqte ha for diff objects and usko sirf class ke name se chala saqte naake object se
class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      console.log("Animal " + this.name + " is walking")
    }
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  //must call static methods by the class name
  console.log(Animal.capitalize("Shiraz"));  // will work
  // console.log(j.capitalize("Shiraz")); // will throw error 
