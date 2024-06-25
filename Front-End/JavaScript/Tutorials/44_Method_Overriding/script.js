// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 28/5/2024  Time: 12:08 Pm     Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Method_Overriding                                                   ***
// #***                                                                                  ***
// #****************************************************************************************

//Basically method overriding me hum parent class me 1 method ko bana kar child class me baar
// use kar saqte hen or modify kar saqte hen child me or parent ke method ko use karne ke liye super use karte hen

class Employee {
    constructor(name) {
      console.log(`${name} - Employee's constructor is here`)
      this.name = name
    }
    login() {
      console.log(`Employee has logged in`);
    }
  
    logout() {
      console.log(`Employee has logged out`);
    }
  
    requestLeaves(leaves) {d
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    constructor(name) {
      super(name)
      console.log(`This is a newly written constructor`)
    }
    
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    // Basically method overriding me hum child class ke method ko baar baar call karte hen 
    requestLeaves(leaves) {
        //Agar hum chahtye hen ke child class parent function ka code use kare to super ka keyword use karte hen
      super.requestLeaves(4)
      console.log("One extra is granted")
    }
  }
  
  let e = new Programmer("Harry")
  e.login()
  e.requestLeaves(3)