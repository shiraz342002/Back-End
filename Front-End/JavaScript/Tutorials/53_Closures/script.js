// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 6/8/2024  Time: 12:56 PM     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Closures in JS                                                      ***
// #***                                                                                  ***
// #****************************************************************************************

// Clousre 1 function hota ha along with uske lexical environment ke sath 

function hello(){
    let name1="Shiraz"
    console.log("hello "+name1);

    function salam(){  // This is a clousre function
        console.log("Salam "+name1);
    }
    name1="Abdullah"
    return salam()
}

let greet= hello()
console.log(greet);


// clousre in nested functions

function returnFunc() {
    const x = () => {
      let a = 1
      console.log(a) 
      const y = () => {
        // let a = 2
        console.log(a)
        const z = () => {
          // let a = 3
          console.log(a)
        }
        z()
      }
      a = 999
      y()
    }
    return x
  }
  
  let a = returnFunc()
  a()