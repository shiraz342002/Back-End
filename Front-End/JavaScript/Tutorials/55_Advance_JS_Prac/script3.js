// Write a js function which solves a promise after n seconds take n as input also use IIFE function

function hello(n){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve("I'm resolved after "+n+ "seconds") 
        },n*1000);
    })
}

(
    async()=>{

        let text= await  hello(2) 
        console.log(text);
        text= await  hello(4) 
        console.log(text);
        text= await  hello(6) 
        console.log(text);s
        text= await  hello(8) 
        console.log(text);
    }
)() 