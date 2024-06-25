// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 6/8/2024  Time: 8:23 AM     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Immediately Invoked Function Expressions                            ***
// #***                                                                                  ***
// #****************************************************************************************

//jesa ke name ha IIFE fucntion have ez syntax ({function}()) joke foran se kisi bhi func ko invoke kardeta

let a=() =>{
 return new Promise((res,rej)=>{
setTimeout(()=>{
     console.log("Hello nigga");
     res(69);
},2500)
});
};

//Traditional way to use asnyc function
// let main=async ()=>{
// let b = await a()
// console.log(b);
// let c = await a()
// console.log(b);
// let d = await a()
// console.log(b);
// }
// main()

// using IIFE
(async()=>{
    let b = await a()
console.log(b);
let c = await a()
console.log(b);
let d = await a()
console.log(b);
})()