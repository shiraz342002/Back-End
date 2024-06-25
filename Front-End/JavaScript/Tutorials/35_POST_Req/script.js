// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 11/5/2024  Time: 12:54 Pm     Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Post Request using Api                                              ***
// #***                                                                                  ***
// #****************************************************************************************

// Post request me hum data kahin se fetch karte hen using async await 

// THIS IS EXAMPLE OF POST REQUEST IMPLEMENTATION
async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST', //by default method is always post
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}
async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()
