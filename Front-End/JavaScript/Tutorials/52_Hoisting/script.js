// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 6/8/2024  Time: 11:20 AM     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Hoisting in JS                                                      ***
// #***                                                                                  ***
// #****************************************************************************************

// Basically hoisting me hmari declatration top par move hojatin ha before execution

// simple variables hoisting

console.log(x); // undefined
var x = 5;

// console.log(y); // will throw error cuz let & const does not work the same way as var 
// let y = 5;

// simple functions hoisting

hello();

function hello() {
  console.log("Hello, world!");
}

//function expressions are hoisted for exp functions that have variables names assigned to it

wwe() // will throw an error cuz wwe is function expression hoisting works with simple function
let wwe = function(){
    console.log("I like wwe");
    
}
