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
let modal = document.getElementById("myModal");
// Get the modal
let modal_0 = document.getElementById("myModal_0");
let modal_1 = document.getElementById("myModal_1");
let modal_2 = document.getElementById("myModal_2");
let modal_3 = document.getElementById("myModal_3");
let modal_4 = document.getElementById("myModal_4");
let modal_5 = document.getElementById("myModal_5");
let modal_6 = document.getElementById("myModal_6");
// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let img_1 = document.getElementById("myImg_1");
let modalImg_1 = document.getElementById("img02");
let img_2 = document.getElementById("myImg_2");
let modalImg_2 = document.getElementById("img03");
let img_3 = document.getElementById("myImg_3");
let modalImg_3 = document.getElementById("img04");
let img_4 = document.getElementById("myImg_4");
let modalImg_4 = document.getElementById("img05");
let img_5 = document.getElementById("myImg_5");
let modalImg_5 = document.getElementById("img06");
let img_6 = document.getElementById("myImg_6");
let modalImg_6 = document.getElementById("img07");
let img_7 = document.getElementById("myImg_7");
let modalImg_7 = document.getElementById("img08");
let captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

img_1.onclick = function () {
  modal_0.style.display = "block";
  modalImg_1.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span_1 = document.getElementsByClassName("close_0")[0];

// When the user clicks on <span> (x), close the modal
span_1.onclick = function () {
  modal_0.style.display = "none";
};

img_2.onclick = function () {
  modal_1.style.display = "block";
  modalImg_2.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span_2 = document.getElementsByClassName("close_1")[0];

// When the user clicks on <span> (x), close the modal
span_2.onclick = function () {
  modal_1.style.display = "none";
};
img_3.onclick = function () {
  modal_2.style.display = "block";
  modalImg_3.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span_3 = document.getElementsByClassName("close_2")[0];

// When the user clicks on <span> (x), close the modal
span_3.onclick = function () {
  modal_2.style.display = "none";
};

img_4.onclick = function () {
  modal_3.style.display = "block";
  modalImg_4.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span_4 = document.getElementsByClassName("close_3")[0];

// When the user clicks on <span> (x), close the modal
span_4.onclick = function () {
  modal_3.style.display = "none";
};
img_5.onclick = function () {
  modal_4.style.display = "block";
  modalImg_5.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span_5 = document.getElementsByClassName("close_4")[0];

// When the user clicks on <span> (x), close the modal
span_5.onclick = function () {
  modal_4.style.display = "none";
};
img_6.onclick = function () {
  modal_5.style.display = "block";
  modalImg_6.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span_6 = document.getElementsByClassName("close_5")[0];

// When the user clicks on <span> (x), close the modal
span_6.onclick = function () {
  modal_5.style.display = "none";
};
img_7.onclick = function () {
  modal_6.style.display = "block";
  modalImg_7.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span_7 = document.getElementsByClassName("close_6")[0];

// When the user clicks on <span> (x), close the modal
span_7.onclick = function () {
  modal_6.style.display = "none";
};
