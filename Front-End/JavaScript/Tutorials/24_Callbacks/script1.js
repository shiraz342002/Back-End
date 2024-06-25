// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 1/5/2024  Time: 7:09 Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Callbacks &  Promises                                               ***
// #***                                                                                  ***
// #****************************************************************************************

// synchronous Programming(executing in sequence)

console.log("Hello I'm Shiraz ");
console.log("I'm 21 years old")

// asynchronous pragoramming(jo time leke chalege usko background me phenk do and baqi pehle karo)

console.log("This is wwe")
setTimeout(()=>{
    console.log("I'm inside an setTimeout");
},3000)
console.log("I'm after setTimeout")

function loadscript(src,callback){
    var script=document.createElement('script');
    script.src=src;
    script.onload=function(){
        console.log('loaded script '+src );
        callback(null,src)
    }
    script.onerror=function(){
        console.log("Error loading script",src)
        callback(new Error("src have some issues maybe it does not exsists"))

    }
    document.head.appendChild(script);
}
function callback(error,src){
    if(error){
        console.log(error)
        return
    }
    console.log("call function has been executed");
    console.log("Your script is running fine",src);
}
loadscript("https://cdn.jxsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",callback)

/* so basically a callback function is exectuted after a certain event takes
 the callback function can be passed as an argument in another fucntion and
 gets executed whenever we want eg after a certain event */

/* There is a phenomenon called "pyramid of Doom" which basically means that 
the function keeps growing on the right side ay too much eg (if web1 loads we load web 2)
which can be dificult to read and maintain so to avoid it we use promises */

