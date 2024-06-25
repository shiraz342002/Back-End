//  #****************************************************************************************
//  #***                                                                                  ***
//  #***  Date: 26/4/2026  Time: 2:56 Pm     Author:  Shiraz Mazhar                       ***
//  #***                                                                                  ***
//  #***  Working On : Advance Strings methods                                            ***
//  #***                                                                                  ***
//  #****************************************************************************************


//STRING METHODS

// 1: .Length
//escape sequence are not included in length of variable 
let l="Karachi";
console.log("The lenght of l is: "+l.length);

// 2: .toUpperCase()

console.log(l.toUpperCase());

// 3: .toLowerCase()

console.log(l.toLocaleLowerCase());

// 4: .Slice()

console.log(l.slice(3));

//5: .slice() with 1 parameter
console.log(l.slice(2));
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
console.log(part)

// 6: .replace()

let lagangs="Crips and bloods";
console.log(lagangs.replace("and","vs"));

// 7: .concat()

let c="Paksitan";
console.log(l.concat(" is a city of ",c+" you dumb"));

// 8: trim()

let c2="     India    "
// console.log(c2)
console.log(c2.trim())

// quiz : use a for loop to pring a string

let n="Compton";
for(let i=0; i<n.length; i++){
    console.log(n[i]);
}

let test1="Kovac"
let test="olofmeister";
console.log(test.toLowerCase());
console.log(test.toUpperCase());
console.log(test.length);
console.log(test.slice(2,9));
console.log(test.replace("meister","cena"));
console.log(test.concat(test1));
console.log(test1.trimEnd());
console.log(test1.endsWith("ac"));
console.log(test.startsWith("olof"));
console.log(test.indexOf("meis"))