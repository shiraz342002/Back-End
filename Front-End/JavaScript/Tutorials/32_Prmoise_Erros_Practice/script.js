//1: Create loadscript file in browser using promises and .then function

function q1(src){
    return new Promise((resolve,reject)=>{
        let script=document.createElement('script');
        script.src=src;
        document.head.appendChild(script);
        console.log("Script loaded");
        resolve(src);
    })
    
}
    let q_1=q1('https://code.jquery.com/jquery-3.4.1.slim.min.js')
    q_1.then((value)=>{
        console.log(value);
    })

//2: Same program with async and await

async function q2(src){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let script=document.createElement('script');
            script.src=src;
            script.onload=()=>{
                resolve("Script loaded");
            };
            script.onerror=(error)=>{
                reject("Some error occured"+error)
            }
            document.head.appendChild(script);
        },4000)
        })
    }
async function hello(){
    try{

        console.log("loading Script");
        let src= await q2('https://code.jquery.com/jquery-3.4.1.slim.min.js');
        console.log(src)
        console.log('Work done');
    }catch(error){
        console.log("Some error occured in hello "+error);
    }
}

hello();

//3: Create a promise which rejects after 3 seconds use asynch and await to get its value
//Also implement error handeling


async function q3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("I'm rejected dunno why");
        }, 3000);
    })
}

async function main1(){
    try {
        console.log('Getting ready to be rejected');
        let rej = await q3();
    } catch (error) {
        console.log('Rejection reason:', error);
    }
    console.log('Finally rejected successfully');
}
main1();

//4: Write a program using promise.all() inside an async function await three promises
//compare its results with the case wheather we await three promises one by one 
 
let p1 =async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(5);
            console.log("Promise 1 is resolved");
            
        }, 4000);
    })
}

let p2 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
            console.log("Promise 2 is resolved");
        },3000)
    })
}

let p3 = async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(15);
            console.log("Promise 3 is resolved");
        },1000)
    })
}

const shiraz =async()=>{
    console.time("run")
    let p1_ans=  p1();
    let p2_ans=  p2();
    let p3_ans=  p3();
    // console.log(p1_ans,p2_ans,p3_ans);
    let Promise_all= Promise.all([p1,p2,p3]);
    console.log(Promise_all)
    console.timeEnd("run")
} 

shiraz();