// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 27/4/2024  Time: 5:05 Pm     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working JS selectors                                                            ***
// #***                                                                                  ***
// #****************************************************************************************

console.log("xD")
let sel=document.getElementsByClassName("box");
sel[2].style.backgroundColor="red";
// document.body.style.backgroundColor="red";
document.getElementById("hello").style.backgroundColor="blue";
// Query selector will implement on the first matched selector
document.querySelector(".box").style.backgroundColor="green";

//Will return html collection of all matched class
// document.querySelectorAll(".box").style.backgroundColor="green";


//we can use foreach when using queryselecor
document.querySelectorAll('.box').forEach(e=>{
    e.style.backgroundColor="brown";
})

// will return all the Tag with searched tag
document.getElementsByTagName