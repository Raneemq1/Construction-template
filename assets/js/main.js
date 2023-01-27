const emailInput = document.getElementById("email");
document.getElementById("div_1").style.display = "block";
document.getElementById("div_2").style.display = "none";
document.getElementById("div_3").style.display = "none";
document.getElementById("div_4").style.display = "none";
document.getElementById("div_5").style.display = "none";

emailInput.addEventListener("focus", function (event) {
  event.target.placeholder = "";
});

emailInput.addEventListener("blur", function (event) {
  event.target.placeholder = "Email Address";
});

function view_1() {
  document.getElementById("div_1").style.display = "block";
  document.getElementById("div_2").style.display = "none";
  document.getElementById("div_3").style.display = "none";
  document.getElementById("div_4").style.display = "none";
  document.getElementById("div_5").style.display = "none";
  document.getElementById("element_1").style.color = "#ff5f13";
  document.getElementById("element_2").style.color = "#161e46";
  document.getElementById("element_3").style.color = "#161e46";
  document.getElementById("element_4").style.color = "#161e46";
  document.getElementById("element_5").style.color = "#161e46";
}
function view_2() {
  document.getElementById("div_1").style.display = "none";
  document.getElementById("div_2").style.display = "block";
  document.getElementById("div_3").style.display = "none";
  document.getElementById("div_4").style.display = "none";
  document.getElementById("div_5").style.display = "none";
  document.getElementById("element_2").style.color = "#ff5f13";
  document.getElementById("element_1").style.color = "#161e46";
  document.getElementById("element_3").style.color = "#161e46";
  document.getElementById("element_4").style.color = "#161e46";
  document.getElementById("element_5").style.color = "#161e46";
}
function view_3() {
  document.getElementById("div_1").style.display = "none";
  document.getElementById("div_2").style.display = "none";
  document.getElementById("div_3").style.display = "block";
  document.getElementById("div_4").style.display = "none";
  document.getElementById("div_5").style.display = "none";
  document.getElementById("element_3").style.color = "#ff5f13";
  document.getElementById("element_2").style.color = "#161e46";
  document.getElementById("element_1").style.color = "#161e46";
  document.getElementById("element_4").style.color = "#161e46";
  document.getElementById("element_5").style.color = "#161e46";
}
function view_4() {
  document.getElementById("div_1").style.display = "none";
  document.getElementById("div_2").style.display = "none";
  document.getElementById("div_3").style.display = "none";
  document.getElementById("div_4").style.display = "block";
  document.getElementById("div_5").style.display = "none";
  document.getElementById("element_4").style.color = "#ff5f13";
  document.getElementById("element_2").style.color = "#161e46";
  document.getElementById("element_3").style.color = "#161e46";
  document.getElementById("element_1").style.color = "#161e46";
  document.getElementById("element_5").style.color = "#161e46";
}
function view_5() {
  document.getElementById("div_1").style.display = "none";
  document.getElementById("div_2").style.display = "none";
  document.getElementById("div_3").style.display = "none";
  document.getElementById("div_4").style.display = "none";
  document.getElementById("div_5").style.display = "block";
  document.getElementById("element_5").style.color = "#ff5f13";
  document.getElementById("element_2").style.color = "#161e46";
  document.getElementById("element_3").style.color = "#161e46";
  document.getElementById("element_4").style.color = "#161e46";
  document.getElementById("element_1").style.color = "#161e46";
}

let up = document.getElementById("move-to-up");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 400) {
    up.style.opacity = "1";
  } else {
    up.style.opacity = "0";
  }
});

up.addEventListener("click", function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

/* Loading icon */

//remove scroll form body using overflow
let body = document.body;
body.style.overflowY = "hidden";

let load = document.getElementById("loading");
load.style.visibility = "visible";
load.style.opacity = "1";
//set the loading screen for short period
window.addEventListener("load", function () {
  this.setTimeout(function () {
    load.style.visibility = "hidden";
    load.style.opacity = "0";
    load.style.transition = "1s";
    body.style.overflowY = "auto";
  }, 2000);
});
