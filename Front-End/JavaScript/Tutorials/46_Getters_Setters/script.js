// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 29/5/2024  Time: 3:15 PM     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On:  Setters & Getters                                                  ***
// #***                                                                                  ***
// #****************************************************************************************

// basically setters getter se hum easily class ke object se class ke vars ko set and get kar saqte hen

class Animal{
    constructor(name){
        this._name=name;
    }
    fly(){
        console.log("I'm flying");
        
    }
    //getter
    get name(){
        return this._name
    }
    //setter
    set name(name){
        this._name=name;
    }
}
class cat extends Animal{
    milk(){
        console.log("Cat is drinking Milk");
        
    }
}
let obj = new Animal("Shiraz");
let c = new cat();

obj.fly()
obj.name="Arslan";
console.log(obj._name)
//instance of returns a bool if it's an object of class or not
console.log(obj instanceof Animal); //Returns True
// console.log(animal instanceof Animal); //Returns False
console.log(obj instanceof cat); // Returns false
console.log(c instanceof cat); // Returns True
console.log(c instanceof Animal); // Returns True


