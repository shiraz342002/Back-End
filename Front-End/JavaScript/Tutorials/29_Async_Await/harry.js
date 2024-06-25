async function getData(){
    // In this function we are simualting getting data from a server
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(1)
            console.log("Data fetched from the server")
        }, 4000);
    })
}

// As it its stated js dont give a flying fuck and exec the rest of the statements

// console.log("Loading modules")
// console.log("Loading componentes")
// console.log("Fetching Data from the server")
// let data =getData();
// console.log(data);
// console.log("Process completed")
// console.log("Initiating Task 2")


// so to do this we can 2 method which is .then method and asynch function

// 1 : Now It's working fine but the prob is we have contain the dependent code in a callback situation
// Even though I didn't understand that asynch does the same thign xD

// let data1 =getData();
// data1.then((value)=>{
//     console.log("Loading modules")
//     console.log("Loading componentes")
//     console.log("Fetching Data from the server")
//     console.log("Process completed")
//     console.log("Initiating Task 2")

// })

// 2: We can use async function and await the rest of the code untill promise is fulfilled

async function main(){
    let data1 = await getData();
        console.log("Loading modules")
        console.log("Loading componentes")
        console.log("Fetching Data from the server")
        console.log("Process completed")
        console.log("Initiating Task 2")
    
}
main()


