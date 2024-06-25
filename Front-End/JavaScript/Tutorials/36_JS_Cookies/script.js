// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 12/5/2024  Time: 8:53 Pm     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: JS Cookies                                                          ***
// #***                                                                                  ***
// #****************************************************************************************

//Basically cookies me hum key value pairs me user ka data save karte hen for prefrences purposes

// we use cookie to store user info on a website
// To set a cookie
// There is key and a value in a cookie
document.cookie="name=Shiraz4442";
document.cookie="age=21";
console.log(document.cookie)

//cookies are seprated by terminator and assigned with an equal sign
//So in order to include ; and = in a cookie we have to encode it and then store it

// let key = prompt("Enter a key ");
// let value=prompt("Enter the value");
// document.cookie=`${key}=${value}`
// // we will use encodeuricomponent to solve the above issue
// document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}}`
// //To decode use 
// // decodeURIComponent

// You can only create 1 cookie at a single document.cookie
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2024 12:00:00 UTC";
console.log(document.cookie)

//To Delete a cookie just set the Exppire date to past date by default it is deleted when the browser is closed
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2014 12:00:00 UTC";

// You can have 20 cookies in 1 domain
// A cookie should not exceed 4kb


//w3 code 
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }