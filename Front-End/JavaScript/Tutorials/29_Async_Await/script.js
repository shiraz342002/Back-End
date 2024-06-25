// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 3/5/2024  Time: 6:06     Author:  Shiraz Mazhar                           ***
// #***                                                                                  ***
// #***  Working On: asynch and await in js                                              ***
// #***                                                                                  ***
// #****************************************************************************************

// Hum kisi bhi function ko async bana saqte ha or usme promise ko await kara saqte hen
// An async function always returns a promise

async function shiraz() {
  let lhrweather = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve("38 deg");
    }, 6000);
  });
  let rykweather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("45 deg");
    }, 7000);
  });

  //In the conventional asynschronous way the promise which gets executed first gets resolved and printed
  //by using async & await we can await a promoise un till the first gets fulfilled

  // lhrweather.then(alert)
  // rykweather.then(alert)

  console.log("Fetching lahore weather");
  let lhr_weather = await lhrweather;
  console.log("Fetched lahore weather", lhr_weather);
  console.log("Fetching Rahim yar khan weather");
  let ryk_weather = await rykweather;
  console.log("Fetched Rahim yar khan weather", ryk_weather);
  return [lhr_weather, ryk_weather];
}

const abdullah = async () => {
  console.log("Hello I'm Abdullah");
};
const func = async () => {
  console.log("Weather app");
  let a = await shiraz();
  let b = await abdullah();
};

func();
