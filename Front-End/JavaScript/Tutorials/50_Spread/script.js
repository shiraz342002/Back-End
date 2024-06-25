// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 6/8/2024  Time: 10:35 AM     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Spread                                                              ***
// #***                                                                                  ***
// #****************************************************************************************

// basically spreat ose hum apne arrays and object ko manipualate kar saqte eg copy,edit,merge

const numbers = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)); // Output: 6

//copying an object
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }

// Using Spread with Strings

const str = 'hello';
const chars = [...str];

console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

// editing an object
let obj2={
    name:"Shiraz",
    age:21,
    isAdult:true
}
console.log({...obj2,name:"Shiraz Mazhar"});
