// Code to find avg of 4 numbers using spread operator 

const marks=[75,88,70,91];
function avg(a,b,c,d){
    return ((a+b+c+d)/4)
}
console.log("The Average is :"+avg(...marks));
