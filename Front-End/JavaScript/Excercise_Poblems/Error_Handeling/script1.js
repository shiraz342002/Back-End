// 1. Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

let x  ="sd";
try{
    if(typeof x !=='number'){
        throw new Error("Number is not an integer wtf")
    }
    else{
        console.log(x+" is an integer");
    }
}catch (e){
    console.log(e);
    
}



