//  #****************************************************************************************
//  #***                                                                                  ***
//  #***  Date: 26/4/2024  Time: 11:55 Am     Author:  Shiraz Mazhar                      ***
//  #***                                                                                  ***
//  #***  Working On :Variables Declaration & Var,let,const                               ***
//  #***                                                                                  ***
//  #****************************************************************************************


console.log("This is basic shit")
//Variables Declaration & Var,let,const

console.log("This is upper ",a)
var a = 5;
var b = 6;
var c= "Shiraz";
//you can use var anywhere adter declaration
console.log(a+b)
console.log(typeof a, typeof b,typeof c);

const a1=5;
// a1=a1+7; //will throw error since you can't change const
console.log(a1)
{
    let w=66;
    console.log(66)
    // you can only use let in a block scope
}
// console.log(w); // will throw error

// Primitive data types


var d=null;  //object(Due older days in java they wrote it object now can't change due to much code dependent on it)
var e=55;    // Number
var f="Shiraz Mazhar"; // String
var g=3.46;  //Number
var h=true; // boolean
var i=false; // boolean
var j=undefined; // undefined

console.log(typeof d,typeof e,typeof f,typeof g,typeof h,typeof i,typeof j)


//What is object
var obj={
    // key    // value
    "name":"Shiraz MAzhar",
    "age":18
}
console.log(typeof obj) 
obj.section="COSC6-A";
obj.isPass="true";
console.log(obj)


//Testing
var isHandsome=true;
console.log(typeof isHandsome);