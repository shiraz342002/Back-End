// Write a JavaScript program to display the current day and time in the following format.

let d= new Date();
let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Firday","Saturday"];
let day=d.getDay();
let d_day=days[day];
hour=d.getHours()
let period= hour>=12? "PM" : "AM"
console.log(period);
hour = (hour >= 12) ? hour - 12 : hour;
minute=d.getMinutes();
seconds=d.getSeconds();

// console.log("Current Time is"+d.getH);
console.log("Today is :"+d_day);
console.log(`Current time is : ${hour} ${period} : ${minute} : ${seconds}`);

