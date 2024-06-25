// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 27/5/2024  Time: 10:39 Pm     Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Prototypes in JavaScript                                            ***
// #***                                                                                  ***
// #****************************************************************************************

//prototypes se hum inheritence karte hen 1 object se dusre ke taraf point karte Ig xD

let a = {
    game: "Valorant"
  }
  let b = {
    player: "GamerFleet"
  }
  a.__proto__ = b
  console.log(a.player);