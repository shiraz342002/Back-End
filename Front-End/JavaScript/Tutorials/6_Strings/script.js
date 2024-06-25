//  #****************************************************************************************
//  #***                                                                                  ***
//  #***  Date: 26/4/2024  Time: 2:41 Pm     Author:  Shiraz Mazhar                       ***
//  #***                                                                                  ***
//  #***  Working On : Strings in JavaScript                                              ***
//  #***                                                                                  ***
//  #****************************************************************************************



// Simple Strings

let fname="Shiraz";
console.log(fname)
console.log("The length of string is :"+fname.length);

let lname='Mazhar';
console.log("Your name is :"+fname+" "+lname);

console.log(fname[0]); // to access a single character [0] is the adress

//Template Litrals

let boy1="Asad";
let boy2="Abbas";
// console.log(boy1+" is a friend of "+boy2) //simple method

let sentence=`${boy1} is a friend of ${boy2}`; //using template literals

console.log(sentence)

console.log(`${boy1} is a good guy `);
//Escape Sequence Character

let fruit='\'Apple\''
console.log(fruit)

let pg="WWE is \npg af these days"
console.log("We can use escape sequence in \nconsole.log as well xD")

console.log("Yo\"Nigga\" What's \tup")

console.log("Wtf is carriage\r return")

