const emailInput = document.getElementById("email");
document.getElementById("div_1").style.display = "block";
document.getElementById("div_2").style.display = "none";
document.getElementById("div_3").style.display = "none";
document.getElementById("div_4").style.display = "none";
document.getElementById("div_5").style.display = "none";

emailInput.addEventListener("focus", function(event) {
  event.target.placeholder = "";
});

emailInput.addEventListener("blur", function(event) {
    event.target.placeholder = "Email Address";
  });

  function view_1(){
    document.getElementById("div_1").style.display = "block";
    document.getElementById("div_2").style.display = "none";
    document.getElementById("div_3").style.display = "none";
    document.getElementById("div_4").style.display = "none";
    document.getElementById("div_5").style.display = "none";
    document.getElementById("element_1").style.color="#ff5f13";
    document.getElementById("element_2").style.color="#161e46";
    document.getElementById("element_3").style.color="#161e46";
    document.getElementById("element_4").style.color="#161e46";
    document.getElementById("element_5").style.color="#161e46";
  }
  function view_2(){
    document.getElementById("div_1").style.display = "none";
    document.getElementById("div_2").style.display = "block";
    document.getElementById("div_3").style.display = "none";
    document.getElementById("div_4").style.display = "none";
    document.getElementById("div_5").style.display = "none";
    document.getElementById("element_2").style.color="#ff5f13";
    document.getElementById("element_1").style.color="#161e46";
    document.getElementById("element_3").style.color="#161e46";
    document.getElementById("element_4").style.color="#161e46";
    document.getElementById("element_5").style.color="#161e46";
  }
  function view_3(){
    document.getElementById("div_1").style.display = "none";
    document.getElementById("div_2").style.display = "none";
    document.getElementById("div_3").style.display = "block";
    document.getElementById("div_4").style.display = "none";
    document.getElementById("div_5").style.display = "none";
    document.getElementById("element_3").style.color="#ff5f13";
    document.getElementById("element_2").style.color="#161e46";
    document.getElementById("element_1").style.color="#161e46";
    document.getElementById("element_4").style.color="#161e46";
    document.getElementById("element_5").style.color="#161e46";
  }
  function view_4(){
    document.getElementById("div_1").style.display = "none";
    document.getElementById("div_2").style.display = "none";
    document.getElementById("div_3").style.display = "none";
    document.getElementById("div_4").style.display = "block";
    document.getElementById("div_5").style.display = "none";
    document.getElementById("element_4").style.color="#ff5f13";
    document.getElementById("element_2").style.color="#161e46";
    document.getElementById("element_3").style.color="#161e46";
    document.getElementById("element_1").style.color="#161e46";
    document.getElementById("element_5").style.color="#161e46";
  }
  function view_5(){
    document.getElementById("div_1").style.display = "none";
    document.getElementById("div_2").style.display = "none";
    document.getElementById("div_3").style.display = "none";
    document.getElementById("div_4").style.display = "none";
    document.getElementById("div_5").style.display = "block";
    document.getElementById("element_5").style.color="#ff5f13";
    document.getElementById("element_2").style.color="#161e46";
    document.getElementById("element_3").style.color="#161e46";
    document.getElementById("element_4").style.color="#161e46";
    document.getElementById("element_1").style.color="#161e46";
  }