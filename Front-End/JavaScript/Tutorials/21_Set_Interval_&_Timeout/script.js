function randomColor(){
    let val1=Math.floor(0+Math.random()*255);
    let val2=Math.floor(0+Math.random()*255);
    let val3=Math.floor(0+Math.random()*255);

    return `rgb(${val1},${val2},${val3})`
}
// We use setInterval when we want to exec that statement for infinite times within a given time period again n again
let si1=setInterval(() => {
    document.getElementsByClassName('text')[0].style.backgroundColor=randomColor();
}, 1000);
let si2=setInterval(() => {
    document.querySelector('.subcontainer').style.backgroundColor=randomColor();
}, 1000);
let si3=setInterval(() => {
    document.querySelector('.container').style.backgroundColor=randomColor();
}, 1000);


// We use clearinterval to stop setInterval 
clearInterval(si1)
clearInterval(si2)
clearInterval(si3)


// We Use setTimeout to only execute that statement 1 time and then stop after a given set of time in mili sec
let si4=setTimeout(() => {
    document.getElementsByClassName('text')[0].style.backgroundColor=randomColor();
}, 5000); //5000 is 5 sec

// We use clear Timeout to stop it
clearTimeout(si4);