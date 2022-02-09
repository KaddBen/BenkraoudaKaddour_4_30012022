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
const close = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const nickname = document.querySelector("#first");
const email = document.querySelector('#email');
const name1 = document.querySelector('#last');
const birthDate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const checkBox = document.querySelector('#location1');
const agreementCheck = document.querySelector('#checkbox2');
const validation = document.querySelector('.message-validation');
const formReserve = document.querySelector('.reserve');



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
close.addEventListener("click", closeModal);


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Check if every form are valid when clicking on the submit button
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  validate();
});
function setSucess(element) {
  const inputControl = element.parentElement;
  inputControl.setAttribute("data-error-visible", "false");
}

function setError(element, number) {
  const inputControl = element.parentElement;
switch (number) {

  case 0: 
  inputControl.setAttribute("data-error", "Le champ ne peut pas etre vide");
  inputControl.setAttribute("data-error-visible", "true");
    break;
 
  case 1:
    inputControl.setAttribute("data-error", "Veuillez entrer au moins deux caracteres");
    inputControl.setAttribute("data-error-visible", "true")
    break;

  case 2:
    inputControl.setAttribute("data-error", "Une adresse email est requise");
    inputControl.setAttribute("data-error-visible", "true");
    break;

  case 3:
    inputControl.setAttribute("data-error", "Veuillez entrer une adresse email valide");
   inputControl.setAttribute("data-error-visible", "true");
    break;

  case 4:
  inputControl.setAttribute("data-error", "Veuillez completer votre date de naissance");
  inputControl.setAttribute("data-error-visible", "true");  
    break;

  case 5:
    inputControl.setAttribute("data-error", "Une valeur numerique est requise pour ce champ");
    inputControl.setAttribute("data-error-visible", "true");  
    break;

  case 6:
    inputControl.setAttribute("data-error", "Vous devez selectionner un emplacement");
    inputControl.setAttribute("data-error-visible", "true");
    break;

  case 7:
    inputControl.setAttribute("data-error", "Vous devez accepter les conditions d'utilisation");
    inputControl.setAttribute("data-error-visible", "true");
    break;
}
 
};

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function digitCheck(quantityValue) {
  const reg = /^[0-9]+$/;
  return reg.test(String(quantityValue));
}

function validate() {

  const nicknameValue = nickname.value.trim();
  const nameValue = name1.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthDate.value.trim();
  const quantityValue = quantity.value.trim();
  const inputRadio = formData[5].getElementsByTagName("input");
  const allInputRadios = document.querySelectorAll("input[type='radio']");
  const allDataErrorVisible = document.querySelectorAll("div[data-error-visible='false']");
  const agreement = document.querySelector("#checkbox1");
  let i;
  let checked = 0; 
  

  if(!nicknameValue) {
      setError(nickname, 0);
  } else if(nicknameValue.length < 2) {
    setError(nickname, 1);
  }
  else {
    setSucess(nickname);
  }

 if(!nameValue) {
      setError(name1, 0);
  } else if(nameValue.length < 2) {
    setError(name1, 1);
  }
  else {
    setSucess(name1);
  }

 if(!emailValue) {
      setError(email, 2);
  } else if (!isValidEmail(emailValue)) {
      setError(email, 3);
  } 
  else {
    setSucess(email);
  }

  if(!birthdateValue) {
      setError(birthDate, 4);
  }
  else {
    setSucess(birthDate);
  }

  if(!quantityValue) {
    setError(quantity, 5);
} else if (!digitCheck(quantityValue)) {
    setError(quantity, 5);
} 
else {
  setSucess(quantity);
}

for ( i = 0; i < allInputRadios.length; i++) {
  if (inputRadio[i].checked) {
    checked++
  } 
}
    if (checked === 0) {
      setError(checkBox, 6);
     } 
     else {
      setSucess(checkBox);
    }

 if (!agreement.checked) {
     setError(agreementCheck, 7)
    }
    else {
      setSucess(agreementCheck);
    } 
console.log(formData.length && allDataErrorVisible.length);
 
      if (allDataErrorVisible.length === formData.length) {
        console.log("Pas d'erreur");
        validation.style.visibility = "visible";
        formReserve.style.visibility = "hidden";
        submitBtn.style.visibility = "hidden";
      }     
};


