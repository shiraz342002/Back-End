// 1: Create an arrat of number an take input from the user to add number to this array
// 2: Keep adding untill user inputs 0

// const num=[];
// let user=undefined;
// while(user!=0 && user!=null){
//     user=prompt("Enter a number : ");
//     user=Number(user)
//     if(!isNaN(user)){
//         num.push(user);
//     }
// }
// console.log(num)

// 3: filter for numbers divisile by 10 from a given array
// let gg=[23,40,29,69,35,90,105,200];
// const d_10=((e)=>{
//     if(e%10==0){
//         return true;
//     }
//     else
//         return false
// })
// console.log(gg.filter(d_10))

// 4: Array of square of given numbers
// const new_arr=gg.map((e)=>{
//         return e**2
// })
// console.log(new_arr)

// const square=((elem)=>{
//     return elem*elem
// })

// let new_map=gg.map(square);
// console.log(new_map)

// 5: Use reduce to calcualte factorial of a number 
let fact=prompt("Enter the number b/w 1-9 ")
let fact_arr=[];
for(let i=1;i<=fact;i++){
    fact_arr.push(i);
}
console.log(fact_arr)

let ans=fact_arr.reduce((x,y)=>{
    return x*y;
})
console.log("The Factorial is : "+ans);