async function getdata(url){
    let x= await fetch(url)
    let data= await x.json()
    console.log(data);
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getdata('https://jsonplaceholder.typicode.com/todos/1')
    // console.log(data)

    console.log("process data")
    let data1= await getdata('https://goweather.herokuapp.com/weather/seattle')
    console.log("task 2")

}

main()