class Employee {
    //Agar hum parent class me constructor nhi denge or child class ka object use karenge to js automatically bana dega default constructor
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
  
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
  }
  
  class Programmer extends Employee {
    //Agar child class derive ke ha to parent ka constructor call karna hi parega lazmi
    constructor(name) {
      super(name)
      console.log(`This is a newly written constructor`)
    }
    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //   super(...args)  // even args bhi chale jate hen
    // }
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      super.requestLeaves(4)
      console.log("One extra is granted")
      // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
  
    }
  }
  
  let e = new Programmer("Harry")
  e.login()
  e.requestLeaves(3)