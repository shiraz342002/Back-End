// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 27/4/2024  Time: 12:07Pm      Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Loops with Arrays                                                   ***
// #***                                                                                  ***
// #****************************************************************************************

let num=[4,12,99,34,81];
// 1: basic for loop

let e=" ";
for (let index = 0; index < num.length; index++) {
    const element = num[index];
      e+=element+" ";
}
console.log(e);

// 2 : arrow function for each loop

// num.forEach((value,index,array)=>{
//     console.log(value,index,array);
// })

// 3 : for in loop (mostly used for objects)

const randomObject = {
    name: "Sapphire",
    color: "Blue",
    size: "Medium",
    material: "Glass",
    price: 25.99
};
// for (const key in randomObject) {
//     if (Object.hasOwnProperty.call(randomObject, key)) {
//         const element = randomObject[key];
//         console.log(key,element)
//     }
// }

// 4 : for of loop (used mainly for arrays)

// for an object
for (const value of Object.values(randomObject)) {
    console.log(value)
}
// to print both keys and values
for (const key of Object.keys(randomObject)) {
    console.log(key+" "+randomObject[key])
}

// To print array using for of loop
for (const iterator of num) {
    console.log(iterator)
}


