// 1_Use logical operator to find whether the age of a person lies b/w 10 & 20?
var age=19;
if(age>10 && age<20){
    console.log("True");
}

// 2_Demonstrate the useo f switch case statements
var day="tues";
switch (day){

    case 'mon':
        console.log("It's monday");
        break;
    case 'tues':
        console.log("It's Tuesday");
        break;
    case 'Wed':
        console.log("It's Wednesday");
        break;
    default:
        console.log("Sunday xD");   
        break; 
 }

// 3_Write a js proram to find wheater a number is divisible 2 & 3
var num=9;
if(num%2==0 && num%3==0){
    console.log("Yes the num is divisible");
}
else{
    console.log("No the num is not divisible");
}

// 4_You can drive if greater then 18 using tenary operator
isadult= age>18?"You can drive":"you cannot drive";
console.log(isadult)