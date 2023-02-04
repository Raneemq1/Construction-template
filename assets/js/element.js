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
document.getElementById("fname").addEventListener("click", function () {
  document.getElementById("fname").classList.add("active");
});
document.getElementById("lname-1").addEventListener("click", function () {
  document.getElementById("lname-1").classList.add("active");
});
document.getElementById("lname-2").addEventListener("click", function () {
  document.getElementById("lname-2").classList.add("active");
});
document.getElementById("input-email").addEventListener("click", function () {
  document.getElementById("input-email").classList.add("active");
});
document.getElementById("address-txt").addEventListener("click", function () {
  document.getElementById("address-txt").classList.add("active");
});
document.getElementById("a-txt").addEventListener("click", function () {
  document.getElementById("a-txt").classList.add("active");
});
document.getElementById("p-txt").addEventListener("click", function () {
  document.getElementById("p-txt").classList.add("active");
});
document.getElementById("s-txt").addEventListener("click", function () {
  document.getElementById("s-txt").classList.add("active");
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}