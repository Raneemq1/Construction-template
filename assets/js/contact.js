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
  }, 1000);
});
