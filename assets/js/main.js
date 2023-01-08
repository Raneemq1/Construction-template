const emailInput = document.getElementById("email");

emailInput.addEventListener("focus", function(event) {
  event.target.placeholder = "";
});

emailInput.addEventListener("blur", function(event) {
    event.target.placeholder = "Email Address";
  });