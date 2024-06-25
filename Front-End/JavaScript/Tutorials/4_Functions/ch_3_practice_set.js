// 1_ Write a program to print the marks of a student in an object using for loop

// let obj={
//     harry:90,
//     rohan:70,
//     aakash:32
// }

// for (const key in obj) {
//         const element = obj[key];
//         console.log(key ,element)
        
//     }


// 2_Write a program in Q1 using for loop

// for(let i=0;i<Object.keys(obj).length; i++){
//     console.log("The marks of "+Object.keys(obj)[i]+" are:"+obj[Object.keys(obj)[i]])
// }

// 3_Write a program to print "try again" untill the user enters correct number

// c_num=69;
// num=undefined;
// while(num!=c_num){
//     num=prompt("Enter a number");
//     if(num!=c_num){
//         console.log("Try Again")
//     }
//     else{
//         alert("You got it")
//     }
// }

// 4_ Mean of 5 numbers entered by user
let a=parseInt(prompt("Enter a number"))
let b=parseInt(prompt("Enter a number"))
let c=parseInt(prompt("Enter a number"))
let d=parseInt(prompt("Enter a number"))
let e=parseInt(prompt("Enter a number"))

a=parseInt(a);
console.log("The mean is ",mean(a,b,c,d,e));

function mean(a,b,c,d,e){
    return ((a+b+c+d+e)/5);
}