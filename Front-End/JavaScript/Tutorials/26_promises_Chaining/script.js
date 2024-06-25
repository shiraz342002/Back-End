// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 3/5/2024  Time: 1:15 Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Promises Chaining                                                   ***
// #***                                                                                  ***
// #****************************************************************************************

let loadScript = (src)=>{
    return new Promise((resolve,reject)=>{
         
        let script=document.createElement('script');
        script.src=src;
        document.body.appendChild(script);
        script.onload=(script)=>{
            resolve("Script is loaded nigga")
        }
        script.onerror=()=>{
            reject(0);
            // console.log('Error Occured somwhere');
            
        }
        
    })

}

let p1=loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js')
p1.then((value)=>{
     console.log(value)
     return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
}).then((value)=>{
     console.log("Script 2 is loaded now")
}).catch((error)=>{
    console.log(error)
    console.log("There is some error bro");
})

     





