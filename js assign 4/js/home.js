
let logOut=document.querySelector(".logOut")
let nameHome=document.querySelector(".nameHome")

let emails=JSON.parse(localStorage.getItem("emails"))

logOut.addEventListener("click",()=>{
    location.href="./../index.html";
})

nameHome.innerHTML=emails[emails.length-1].userName

if(window.location.pathname ==="./../home.html"){
    nameHome.innerHTML=emails[emails.length-1].userName
}


