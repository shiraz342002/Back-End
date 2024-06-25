function create(img,title,c_name,views,months){
// let loc_img=document.getElementById('thumb');
// let loc_title=document.getElementById('title');
// let loc_views=document.getElementById('views');
// let loc_c_name=document.getElementById('c_name');
// let loc_month=document.getElementById('month');

// loc_img.setAttribute('src',img);
// loc_title.innerHTML=title;
// loc_c_name.innerHTML=c_name;
// loc_views.innerHTML=views;
// loc_month.innerText=months+" months ago";
let m_views="";
if(views<1000000){
    m_views=views/1000+"K";
}
if(views>1000000){
    m_views=views/1000000+"M";
}

let html=` <div class="container">
<img id="thumb" src=${img} alt="">
<span id="title">${title}</span>
<div id="c_name">${c_name}</div>
<span id="views">${m_views}</span>
<span id="months">${months}</span>
</div> `

document.querySelector(".container").innerHTML += html;

}

create("https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD2F1t93-iBW0-yJJptKjyJhXXFhA","Welcome to java script tutorials","Shiraz Mazhar",100009,8);

