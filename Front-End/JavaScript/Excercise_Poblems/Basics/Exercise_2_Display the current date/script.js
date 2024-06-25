// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 12/5/2024  Time: 7:57Am     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Exercise-1 Display the current day and time in a specific format    ***
// #***                                                                                  ***
// #****************************************************************************************

let date=new Date()
console.log(date)
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
d=date.getDay();
day=daylist[d];
console.log("Today is : "+day)
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds(); 
var m=(hour>=12)?" PM " :" AM ";
console.log("Current Time :",hour,m,":",minute,":",second)