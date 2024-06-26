import fs from "fs/promises"
import path from "path";

// TO READ THE DATA

// let data=await fs.readFile("shiraz2.txt")
// console.log(data.toString());

// TO WRITE THE DATA OR CREATE
let b = await fs.writeFile("niko.txt"," And I play for G2Sports")
console.log(b);

// TO ADD MORE TEXT
let c = await fs.appendFile("niko.txt"," I'm the new text to be added")
console.log(c);

//TO RENAME THE ALREADY CREATED FILE
// fs.rename("niko.txt","olofmeister.txt")


