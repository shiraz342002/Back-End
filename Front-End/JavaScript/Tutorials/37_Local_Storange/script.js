// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 14/5/2024  Time: 12:06 Pm     Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: LocalStorage & related methods                                      ***
// #***                                                                                  ***
// #****************************************************************************************

//session storage se hum user ka data browser me save karlete hen ye save rehta jab taq khud na clear karen

// Local Storage: Data stored in local storage persists even after the browser is closed and reopened.
//  It has no expiration time unless manually cleared by the user or through JavaScript.

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "red" || key == "blue") {
        localStorage.removeItem(key)
}

if (key == 0) {
        localStorage.clear()
}
localStorage.length // To get the length of the stored keys
localStorage.key(1) // To Search an item based on its length