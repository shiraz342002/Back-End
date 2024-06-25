// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 6/5/2024  Time: 10:19 Am     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Hackerman Ez                                                        ***
// #***                                                                                  ***
// #****************************************************************************************

let a = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username iamharry...",
    "Trying Brute Force...",
    "200K passwords tried...",
    "Match not found",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match not found...",
    "Another 200K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

const func = async(sec)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true);
        },sec*1000);
    })
}

const show_hack= async(text)=>{
    await func(1); 
    const hackStatus = document.getElementById("text");
    hackStatus.innerHTML += "<p>" + text + "</p>";
}

(async()=>{
    for(let i=0;i<a.length;i++){
        await show_hack(a[i]);
    }
})()