var toggle = document.querySelector(".toggle");
var menu = document.querySelector(".menu");

toggle.addEventListener("click",function(){
    toggle.classList.toggle("active")
    menu.classList.toggle("active")
});