//loading screen
let body = document.body;
body.style.overflow = "hidden";
document.querySelector(".load").style.opacity = "1";
document.querySelector(".load").style.visibility = "visible";
window.addEventListener("load", function () {
  this.setTimeout(function () {
    document.querySelector(".load").style.opacity = "0";
    document.querySelector(".load").style.visibility = "hidden";
    document.querySelector(".load").style.height = "0vh";
    body.style.overflow = "visible";
  }, 2000);
});
