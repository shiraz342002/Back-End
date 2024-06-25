// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 6/8/2024  Time: 11:15 AM     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Local & Global Scope                                                ***
// #***                                                                                  ***
// #****************************************************************************************

//basically let or const sirf local scope me accessible jabke var global me hote

var globalVar = 'I am a global variable';

function displayGlobalVar() {
  console.log(globalVar);
}

displayGlobalVar(); 
console.log(globalVar); 

function localScopeExample() {
  
    var localVar = 'I am a local variable';
  
    console.log(localVar);
  }
  
  localScopeExample();
  
//   console.log(localVar); // will give error