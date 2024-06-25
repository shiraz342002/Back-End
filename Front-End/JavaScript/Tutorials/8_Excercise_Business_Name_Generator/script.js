//  #****************************************************************************************
//  #***                                                                                  ***
//  #***  Date: 26/4/2024  Time: 3:19 PM     Author:  Shiraz Mazhar                       ***
//  #***                                                                                  ***
//  #***  Working On :  Business Name Generator                                           ***
//  #***                                                                                  ***
//  #****************************************************************************************

function adjective(){
    let w1="Crazy";
    let w2="Amazing";
    let w3="Fire";
    let rand=Math.floor(Math.random()*3);
    if(rand==0){
        return w1;
    }
    if(rand==1){
        return w2;
    }
    if(rand==2){
        return w3;
    }
}
function shop_name(){
    let w1="Engine";
    let w2="Foods";
    let w3="Garments";
    let rand=Math.floor(Math.random()*3);
    if(rand==0){
        return w1;
    }
    if(rand==1){
        return w2;
    }
    if(rand==2){
        return w3;
    }
}
function Another_word(){
    let w1="Bros";
    let w2="Limited";
    let w3="Hub";
    let rand=Math.floor(Math.random()*3);
    if(rand==0){
        return w1;
    }
    if(rand==1){
        return w2;
    }
    if(rand==2){
        return w3;
    }
}
var user=undefined;
while(user!=='N' && user!=='n'){
    let w1=adjective();
    let w2=shop_name();
    let w3=Another_word();   
    console.log("Your Business Name is : "+w1+" "+w2+" "+w3);
    user=prompt("Don't like it Try Again ? Press y to try a different name, Press To Finish Press N");
}