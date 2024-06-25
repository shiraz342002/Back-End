// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 26//4/24  Time: 9:32 Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On:  Arrays in Js                                                       ***
// #***                                                                                  ***
// #****************************************************************************************


// Simple Array

let marks2A=[34,28,18,27,false,"Not Present"];

console.log(marks2A[0]);
console.log(marks2A[1]);
console.log(marks2A[2]);
console.log(marks2A[3]); 
console.log(marks2A[4]);
console.log(marks2A[5]);
console.log(marks2A[6]); // dont exsist

// to find the length of array
console.log("The length of array is :"+marks2A.length)

marks2A[6]=23; // Adding a new Value in Array

marks2A[2]=44; //Changing the value of an array

console.log(marks2A) // printing array

// Arrays are mutable and can be changed

console.log(typeof marks2A) // In js arrays are objects

// Quick Quiz

let city=["Ryk","Lahore","Karachi","Islamabad","khanpur"]
city[5]="Shorkot Cantt";
for(let i=0; i<city.length; i++){
    console.log(city[i])
}
console.table(city)


// Array Methods

// 1: To change into String
let num=[7,3,5,34,19];
let b =num.toString(); //to covert into string
console.log(num)  //object
console.log(b)//String

console.log(typeof(num))
console.log(typeof(b))

// 2: Join() Method
let c=num.join("-"); //string
console.log(c)

// Pop() Method
// removes last element from array
 
// 3: num.pop();
console.log(num)

let r=num.pop()
console.log("The Popped element is :"+r)
console.log(num)

// 4: push()
// will add a element in array in the last

let p=num.push(69);
console.log(num);

// 5: Shift()
// removes the first element from the array
let s = num.shift();
console.log(s) // will print the removed element
console.log(num);

// 6:unshift()
// add the element at the start of array
let u=num.unshift(33)
console.log(num);




