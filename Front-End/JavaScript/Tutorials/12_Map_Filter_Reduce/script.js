// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 27/4/2024  Time: 12:51Pm     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Map,Filter & Reduce                                                 ***
// #***                                                                                  ***
// #****************************************************************************************

// 1 : FILTER (Returns a new array based on the function do not change orignal array)

// Exp Code How this can be done easily using map 
let arr=[5,7,8,13,9];
let new_arr=[];
for (const iterator of arr) {
    new_arr.push(iterator**2);
}
console.log(arr)
console.log(new_arr)
// // using map
new_arr=arr.map(e=>{
    return e**2;
})
console.log(new_arr)

let arr1=[45,23,21,19]
let a=arr1.map((value,index,array)=>{
    console.log(value,index,array) //you can also print or use index no and the whole array
    return value+index;
})

// 2: Filter (Creates new filtered values array based on funtion true values )

//Using a completely different function
// let arr=[45,23,21,19,66,10]
// const l_filter=((e)=>{
//     if(e>20){
//         return true;
//     }
//     return false;
// })

// console.log(arr.filter(l_filter))

//using the same function

// let new_arr=arr.filter((e)=>{
//     if(e<20){
//         return true;
//     }
//     else
//     return false;
// })

// console.log(arr)
// console.log(new_arr)


// 3: Reduce(Reduce the array to single values based on function)
// const method=((a,b)=>{
//     return a+b;
// })

// console.log(new_arr.reduce(method));

// 4: Array.from
//Creates array of individual chars
Array.from("Shiraz Mazhar")