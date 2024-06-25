// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 9/5/2024  Time: 12:27 Am     Author:  Shiraz Mazhar                       ***
// #***                                                                                  ***
// #***  Working On: Fetch Api in JS                                                     ***
// #***                                                                                  ***
// #****************************************************************************************

//basically Fetch Api se hum kisi api se data get karte using promises check akrte hen response araha
//ya nhi isme 2 then use hote 1 for check data coming or not 2nd for displaying & check errors

let p = fetch("https://goweather.herokuapp.com/weather/seattle") // returns a promise in p
//fetch api me hamesha do .then lagte hen cuz 2 promise hote
// The first .then is used to handle the response received from the server
p.then((response)=>{
    console.log(response.status) //status if 200 means it working fine
    console.log(response.ok);    //ok if true means it working fine 
    console.log(response.url);   //api url
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    return response.text();    // The way in which data will be fetched
    // return response.json(); // The way in which data will be fetched
    // return response.blob(); // The way in which data will be fetched
    // return response.formData(); // The way in which data will be betched
}).then((data)=>{  // 2nd promise is used to handle erros and display the fetched daya
    console.log(data)
}).catch(error => {
    // Handle any errors that occurred during the request or processing
    console.error('There was a problem with the fetch operation:', error);
  });
 