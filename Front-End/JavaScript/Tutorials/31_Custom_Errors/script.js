// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 5/5/2024  Time: 12:02 Pm      Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Custom Errors in JS                                                 ***
// #***                                                                                  ***
// #****************************************************************************************

// Try Catch with .name,.message,.stack
// try{
//    let name1=prompt("Enter your name ");
//    console.log("Your name is : "+name1);
// }
//     catch(error){
// console.log(error.name); // error name in this case it is ReferenceError
// console.log(error.message); // prompt not defined which is the message
// console.log(error.stack); //not imp but you can print it

// }

//Throwing Custom Errors

try {
  let age = prompt("Enter your age ");
  age = Number(age);
  console.log(typeof age);
  if (age > 18) {
    throw new TypeError("This is a custom error btw xD");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  //if we get an error in catch block the execution will stop but finally will enable the code to work flawlessly
} finally {
  // finally guarntess our code always runs it is like a cleanup
  console.log("I'm finally and I will always execute");
}
console.log("I'm outside");
