//  #****************************************************************************************
//  #***                                                                                  ***
//  #***  Date: 26/4/2024  Time: 2:02 Pm     Author:  Shiraz Mazhar                       ***
//  #***                                                                                  ***
//  #***  Working On : Faulty Calculator                                                  ***
//  #***                                                                                  ***
//  #****************************************************************************************

let num1 = parseInt(prompt("Enter first number: "))
let num2=  parseInt(prompt("Enter 2nd number :"))
let op=prompt("Enter the any of the operation + - * /");
r=Math.random();
console.log(r)
if(r<=0.2){
    broken_calc(num1,num2,op);
}
if(r>0.2){
    fixed_calc(num1,num2,op);
}
function fixed_calc(num1,num2,op){
    if(op=='+'){
        console.log(num1+num2);
    }
    else if(op=='-'){
        console.log(num1-num2);
    }
    else if(op=='*'){
        console.log(num1*num2);
    }
    else if(op=='/'){
        console.log(num1/num2);
    }
}
function broken_calc(num1,num2,op){
    if(op=='+'){
        console.log(num1-num2);
    }
    else if(op=='-'){
        console.log(num1/num2);
    }
    else if(op=='*'){
        console.log(num1+num2);
    }
    else if(op=='/'){
        console.log(num1**num2);
    }
}

