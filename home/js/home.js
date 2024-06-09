var getName=JSON.parse(localStorage.getItem("userName"));
var welcomeMessage=document.querySelector("#welcomeMessage");
var logout=document.querySelector("#logout");

welcomeMessage.innerHTML=`Welcome ${getName}`;

logout.addEventListener("click",function(){
    localStorage.removeItem("userName")
    location.href ="../../login/login.html"
})