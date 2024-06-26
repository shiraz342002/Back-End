// const { error } = require("console");
const { error } = require("console");
const fs = require("fs")
//You can also use promoises in file handeling in both common and ecma
const fs = require("fs/promises")

console.log("Creating a file");
// fs.writeFileSync("Shiraz.txt","I'm trying to learn Node JS")
// console.log("file Created");


//WriteFile is used to Create Synchronosuly(meaning it will wait for the file to create and then move onward)
//Using callback will create callback hell so we instread use promises
fs.writeFile("shiraz2.txt"," This is a new file",()=>{ //WriteFile is more preferred way
    console.log("second file Created");
    fs.readFile("shiraz2.txt",(error,data)=>{
        console.log("Error : "+error);
        console.log("Data :"+data.toString()); // use tostring() if it shows buffer or any unorthodox
       
        
    })
})
console.log("This is end");

//Is Used to insert more data in a file 
fs.appendFile("shiraz2.txt"," Shiraz love coding in javascript",(errorm,data)=>{
    console.log(error);
    console.log(data);
})

