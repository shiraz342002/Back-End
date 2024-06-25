// #****************************************************************************************
// #***                                                                                  ***
// #***  Date: 14/5/2024  Time: 9:41Pm     Author:  Shiraz Mazhar                        ***
// #***                                                                                  ***
// #***  Working On: Practice Set on Fetch Api & Storages                                ***
// #***                                                                                  ***
// #****************************************************************************************

// 1: Use a free api from internet and use it in your web

let p = fetch("https://random.dog/a0125c04-2a94-486c-a76c-3ed443eb9822.mp4")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.url);
    if(!response.ok){
        throw new Error("Failed Fetching Api")
    }
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

// 2: Create a note saving app which stores notes in local storage
// 3: Also fetch the note that was stored
// 4: Also Delete the note
function save(){
    let note=document.getElementById("note").value;
    localStorage.setItem('user',note);
    let ans = localStorage.getItem('user');
    document.getElementById("response").innerHTML="Your note :"+ans+" is saved succefully"
    let b=document.createElement('button')
    document.body.appendChild(b)
    b.innerText="Delete"
    b.onclick=function(){
        delete_note(note);
    }
}
function delete_note(note){
    localStorage.removeItem('user')
    alert("Deleted succesfully")
}