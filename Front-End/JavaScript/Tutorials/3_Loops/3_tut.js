//  #****************************************************************************************
//  #***                                                                                  ***
//  #***  Date: 26/4/2024  Time: 12:57 pm     Author:  Shiraz Mazhar                      ***
//  #***                                                                                  ***
//  #***  Working On : Loops                                                              ***
//  #***                                                                                  ***
//  #****************************************************************************************


// Basic For loop Simple
console.log("Loops boii")
let a=null;
for (let i = 0; i<=100; i++) {
    // console.log(i)
}
//For in loop
let obj={
    Name:"Shiraz Mazhar",
    Age:21,
    Section:"CS6-A"
}
console.log(obj)
for (const key in obj) {
    const e = obj[key];
    console.log(key,e)
    // console.log(key)
    // console.log(e)
}
//For of Loop (is used when need to iterate arrays)
for (const c of "Shiraz Mazhar") {
    console.log(c)
}

//While Loop
i=0;
// while(i<6){
//     console.log(i)
//     i++
// }

//Do While Loop(Used mostly when you want that ke 1 dafa to ho hi must run)
do {
    console.log(i)
    i++
} while (i<6);
