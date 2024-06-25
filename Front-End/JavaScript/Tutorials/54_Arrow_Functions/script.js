// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 8/6/2024  Time: 1:33 PM     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Arrow Functions Revisted                                            ***
// #***                                                                                  ***
// #****************************************************************************************

const hello = (name)=> console.log("Hello "+name);
hello("Shiraz")

const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function() {
      // let that = this
      // console.log(this)
      setTimeout(() => {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
  sayHello("Harry", "Good Afternoon")
  // console.log(x.name, x.exp)
  // x.show()
    

    