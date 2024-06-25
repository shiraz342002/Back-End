// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 3/5/2024  Time: 3:44 Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Promises Handlers                                                   ***
// #***                                                                                  ***
// #****************************************************************************************

let p1 = new Promise((reject,resolve)=>{
    let r = Math.random();
    if(r>0.5){
        resolve(r);
    }
    if(r<0.5){
        reject(r);
    }
})

// Basically using different then is handlers you can use as much as you want handlers are different from 
// chaining because they are independent of each other and don't depend on one another 

p1.then((val)=>{
    console.log("Values is greater than 0.5")
}).catch((val)=>{
    console.log("Error - > Val is less than 0.5")
})

p1.then(function(){
    console.log("Promise Completeted Successfully");
}).catch(function(){
    console.log('Promise is fucked successfully');
    
})