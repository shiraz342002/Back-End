// Javascript code to print after 2 seconds

async function prob1(str){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(str)
        },2000)
    })
}

(
    async()=>{
        let text =await prob1("Hello\n World")
        console.log(text);
        text=await prob1("Hello\n World")
        console.log(text);
    }
)()
  
