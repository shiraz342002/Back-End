// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 14/5/2024  Time: 8:44Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Session Storage                                                     ***
// #***                                                                                  ***
// #****************************************************************************************

//session storage se hum user ka data browser me save karlete hen jab taq browser chalta ha data rehta once band karte data clear hojata

// Session Storage: Data stored in session storage is only available for the duration of the page session. 
// Once the browser tab is closed, the data is cleared.

sessionStorage.setItem("Shiraz","69")
sessionStorage.getItem("Shiraz") //To get the value
sessionStorage.removeItem("Shiraz")//To remove
sessionStorage.clear()//To clear the storage
sessionStorage.key(0)// To get the data/value from the index no

localStorage.onstorage=(e)=>{
    alert("Value Chaneged")
    console.log(e);

}