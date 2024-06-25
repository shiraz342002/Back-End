// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 2/5/2024  Time: 12:52 Pm     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Promoises in Javascript                                             ***
// #***                                                                                  ***
// #****************************************************************************************

// Basic promise syntax promise are used to run the code asynchronously 
// It can be fulfilled by either resolving(returning a value) or rejecting(throwing an error)

let prom1= new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        resolve(true); //job finished succesfully
    },4000)
})

let prom2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        reject(new Error); //job failed successfully
    },4000);
})

// console.log(prom1);
// console.log(prom2);

//There are 2 states of a promise 
// State :  This is the state in which the promise is, It's either fulfilled or unfulfilled
// Result : This is the value that is returned after either resolve or reject

//We Use then method to do some work after promise is resolved/completed
prom1.then((value)=>{
    console.log(value);
})

//We use catch method to catch an error if the promise is rejected

prom2.catch((error)=>{
    console.log("Some Error occured ",error)
})


// We can also use both catch and then in same function

// prom2.then((value)=>{
//     console.log(value) 
// },(error)=>{
//     console.log(error)
// })



