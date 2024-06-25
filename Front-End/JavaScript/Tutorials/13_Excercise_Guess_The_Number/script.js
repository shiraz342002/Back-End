// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 27/4/2024  Time: 3:03 Pm     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Guess The number Game                                               ***
// #***                                                                                  ***
// #****************************************************************************************


console.log("Welcome To The Game ")
console.log("Guess The Correct Number You Have hundred Tries");
let g_num=null;
let c_num=Math.floor(Math.random()*100);
let score=99;
let tries=1;
while(g_num!=c_num){
    g_num=prompt("Guess The number : ");
    g_num=Number(g_num);
    if(g_num!==c_num){
        if(g_num>c_num){
            console.log("Incorrect Go lower");
            tries++;
            score--;
        }
        if(g_num<c_num){
            console.log("Incorrect Go Higher");
            tries++;
            score--;
        }
        

    }
}
console.log("You Guessed it Correct")
console.log("It took you",tries+" tries");
console.log("Your score is : "+score);
