function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelectorAll(".close")
const submitBtn = document.querySelectorAll(".btn-submit")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Check if every form are valid when clicking on the submit button
submitBtn.forEach((btn) => btn.addEventListener("click", nameCheck));


// Check characters from nickname form
function nameCheck() {
  const prenom = document.getElementById("first");
  prenom.ariaValueText;
}