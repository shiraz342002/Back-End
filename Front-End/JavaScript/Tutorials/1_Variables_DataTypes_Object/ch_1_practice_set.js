// 1_ Create a variable of type string and try to add a number to it
var str="Shiraz Mazhar";
var num=34;
console.log(str+" ",num) //working in concatination

// 2_ Use typeof operator to find the datatype of the string in last question
console.log(typeof str,typeof num)

// 3_Create a const object in javascript can you change it to hold a number later
const obj1={
    "Name":"Shiraz Mazhar",
    "Age" : 15
}
console.log(obj1)
obj1.Age=21; // you can also update exsisting ones
console.log(obj1)

// 4_Try to add a new key to the const object in prob 3 ?

obj1.cgpa=3.43; //Yes you can add more data in const object
console.log(obj1)

// 5_Write a js program to create a word meaning dic of 5 words

var dict={
    sophisticated:"having, revealing, or involving a great deal of worldly experience and knowledge of fashion and culture.",
    vague:"of uncertain, indefinite, or unclear character or meaning.",
    self_centered:"concerned solely with one's own desires, needs, or interests.",
    ambitious:"having or showing a strong desire and determination to succeed.",
    condescending:"having or showing an attitude of patronizing superiority.",
}
console.log(dict)