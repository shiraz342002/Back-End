button=document.getElementById('btn');
button.addEventListener('click',()=>{
    var h1 =document.createElement('h1');
    button.insertAdjacentElement('afterend', h1)
    h1.innerHTML="I'm clicked";
    
})

// Event bubbling is when ancesotors are also effected because of adding Event listeners
document.querySelector('.text').addEventListener('click',(e)=>{
    // use e.stoppropagation to stop this bubbling where
    alert("text was clicked")
    console.log(e);
    // e.stopPropagation();
})
document.querySelector('.subcontainer').addEventListener('click',()=>{
    alert("subcontainer was clicked")
})
document.querySelector('.container').addEventListener('click',Clicked);
function Clicked(){
    alert("Container was clicked")
}

// Remove Event Listner 

document.querySelector('.container').removeEventListener('click',Clicked);

