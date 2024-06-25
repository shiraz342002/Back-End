// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 3/5/2024  Time: 3:52 Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Promise Api                                                        ***
// #***                                                                                  ***
// #****************************************************************************************

let p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Html downloaded");
    },6000)
})
let p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("CSS downloaded");
        reject(new Error)
    },2000)
})
let p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("javascript downloaded");
    },5000)
})

// p1.then((value)=>{
//     console.log("Downloaded html");
//     // console.log(value);
// }).catch(()=>{
//     console.log("Html downloading failed")
// })

// p2.then((value)=>{
//     // console.log(value);
//     console.log("Downloaded CSS");
// }).catch(()=>{
//     console.log('CSS downloading failed');
    
// })

// p3.then((value)=>{
//     // console.log(value);
//     console.log("Downloaded Javascript");
// }).catch(()=>{
//     console.log('Cannot download Javascript');
    
// })

// 1: Promise.all (works if you want to exec some code only once all the promises are completed)
//    but even if 1 of the promises in promises_all gets rejected the entire thing doesn't run

// let Promise_all= Promise.all([p1,p2,p3]);
// Promise_all.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log("Error downloading");
// })

// 2: Promise_.all_setteled does not give error insread it gives us status & reason

// let Promise_all_setteled= Promise.allSettled([p1,p2,p3]);
// Promise_all_setteled.then((value)=>{
//     console.log(value);
// }).catch((value)=>{
//     console.log("Error downloading");
//     console.log(value)
// })

// 3: Promise.race is used to get the promises that have completed first even if it giving error

// let promise_race=Promise.race([p1,p2,p3]);
// promise_race.then((value)=>{
//     console.log(value);
// })

// 4: Promise.race is used to get the promises that have completed first without any error

// let promise_any=Promise.any([p1,p2,p3]);
// promise_any.then((value)=>{
//     console.log(value);
    
// })

// 5: promise.resolve Directly gives you a resolved promoise
let promise_res=Promise.resolve(69);
promise_res.then((value)=>{
    console.log(value);
    
})


// 6: promise.reject directly gives you a rejected promise

let promise_rej=Promise.reject(new Error("I'm an error"));
promise_rej.then((value)=>{
    console.log(value);
    
})