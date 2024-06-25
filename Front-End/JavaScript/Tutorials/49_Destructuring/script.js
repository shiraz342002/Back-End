// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 6/8/2024  Time: 9:35 AM     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Destructing                                                         ***
// #***                                                                                  ***
// #****************************************************************************************

//basically destructing easy way ha variables ko objects and arrays se assign karne ka

//Traditional way
let arr1=[5,23];
let c = arr1[0];
let d = arr1[1];
console.log(c,d);

// Convincent way
let arr=[5,9,12,23,68];
let [a,b,...rest]=arr;
//remaning elements will be stored in rest which would be an array
console.log(a,b,rest);

// you can even set which elem to be stored in rest I mean from where
let arr2=[55,19,32,23,68,21,37,47];
let [x,y, , , ,...rest2]=arr2;
console.log(x,y,rest);

//similarly we can destruct objects on left hand side of assignment
let obj = {m:4,n:9}
// const {m,n}=obj; //same as below
let {m,n}=obj={m:4,n:9}; //same as below
console.log(m,n);


