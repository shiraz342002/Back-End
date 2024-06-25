// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 28/4/2024  Time: 12:38 PM     Author:  Shiraz Mazhar                      ***
// #***                                                                                  ***
// #***  Working On: Color the Boxes Excercise                                           ***
// #***                                                                                  ***
// #****************************************************************************************
let randomcolor = [];

function colors() {
    let color = ['blue', 'red', 'brown', 'yellow', 'orange', 'green', 'aqua', 'purple', 'magenta'];

    while (randomcolor.length < 5) {
        let rand = Math.floor(Math.random() * 10); 
        if (!randomcolor.includes(rand)) {
            randomcolor.push(color[rand]);
        }
    }
}
colors();
let clr1=randomcolor[0];
let clr2=randomcolor[1];
let clr3=randomcolor[2];
let clr4=randomcolor[3];
let clr5=randomcolor[4];

document.querySelectorAll('.box').forEach((e, index) => {
    e.style.backgroundColor = randomcolor[index];  

});



