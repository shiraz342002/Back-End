// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 4/26/2024  Time: 4:14 Pm     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Advance Array Methods                                               ***
// #***                                                                                  ***
// #****************************************************************************************


// MORE ARRAY METHODS
let num=[1,2,3,4,5,6,7,8,9]

// 1: Delete method

delete num[3];
console.log(num)
// // Array Length does not affect by deletion
console.log(num.length)

// 2: Concat Method

// let num1=[10,11,12,13,14,15,16]
// let newarr=num.concat(num1); //1st method
// console.log(newarr); 
// console.log(num.concat(num1)) //2nd method

// 9 : Sort()

// Will arrange the items in ascending order

let gpa=[2.9,2.2,3.3,3.9,3.8,2.1];
let n=[229,3,63,12,9,33,69];
n.sort();
console.log(n)

// will arrange the elements according to alphabet eg /129 , 229, 3339, 41,5;
// imp question

console.log(gpa) //before
gpa.sort();
console.log(gpa) //after

//to sort the item you can use compare function

let compare=(a,b)=>{  
    return a-b; //for ascending order
    // return b-a; // for descending order
}
// n.sort(compare)
// console.log(n)


// 10: reverse()
// simply just reverse the whole array
n.reverse()
// console.log(n)


// 11: splice

// let gpa=[2.9,2.2,3.3,3.9,3.0,2.1];

// let deletedvalues=gpa.splice(1,1,2.1)
// console.log(deletedvalues) //will print deleted values

// gpa.splice(2,2,3.1,3.1);
// console.log(gpa)


// 12: Slice

let x=[1,2,3,4,5,6]
//it will not modify the orignal array you have to create a new one lol xD 
// let new_arr=x.slice(3)
let new_arr=x.slice(2,5)

console.log(x) // will print the orignal array
console.log(new_arr) // will print the new array




