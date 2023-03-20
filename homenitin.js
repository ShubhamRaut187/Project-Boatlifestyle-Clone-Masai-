
// sticky navbar
 
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


  document.querySelector("#boathome").addEventListener("click",home)
function home(){
  window.open("home11.html")
}
// 