//input field
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const email = document.getElementById("email")

//form
const form = document.getElementById("myForm")

//validation colors
const green = "#4caf50"
const red = "#f44336"


//handle form
form.addEventListener('submit', function(event) {
  // Prevent default behaviour
  if (
    !validateFirstName() ||
    !validateLastName() ||
    !validateEmail() ||
    // !validateConfirmPassword() ||
    !validatePassword()
  ) event.preventDefault();
   console.log('hello');
});

//validating functions
function validateFirstName() {
  // check if is empty
  if (checkIfEmpty(firstName)) return;
  //check if it has letters
  if (!checkIfOnlyLetters(firstName)) return;
  return true;
}

function validateLastName() {
  // check if is empty
  if (checkIfEmpty(lastName)) return;
  //check if it has letters
  if (!checkIfOnlyLetters(lastName)) return;
  return true;
}

function validatePassword(){
  //empty
  if(checkIfEmpty(password)) return;
  //length requirements
  if(!meetLength(password,4,30)) return;
  //check password regex
  //1-a
  //2 -a 1
  //3- A a 1
  //4- A a 1 @
  if(!containsCharacters(password, 4)) return;
  return true
}

// function validateConfirmPassword(){
//   if(password.className !== "valid"){
//     setInvalid(confirmPassword, `Password must be valid`);
//     return;
//   }
//   // check if they are equal
//   if(password.value !== confirmPassword.value){
//     setInvalid(confirmPassword,`Passwords must match`)
//     return;
//   } else {
//     setValid(confirmPassword)
//   }
//   return true;
// }

function validateEmail(){
  if(checkIfEmpty(email)) return;
  if(!containsCharacters(email, 5)) return;
  return true;
}

//utility functions
//process to handle if field is potentially empty
function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    //set valid as invalid
    setInvalid(field , `${field.name} must not be empty`);
    return true;
  } else {
    //set field valid
    setValid(field);
    return false;
  }
}

//fucntion to check if field is empty
function isEmpty(value) {
  if (value === '') return true;
  return false;
}


//invalid set
function setInvalid(field, message) {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
}
//valid set
function setValid(field) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
  // field.nextElementSibling.style.color = green;
}


function checkIfOnlyLetters(field){
  if(/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field,`${field.name} must only contain letters`)
  } return false;
}

function meetLength(field,minLength,maxLength){
  if(field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength){
    setInvalid(field, `${field.name} must be at least ${minLength} characters `)
    return false
  } else {
    setInvalid(field, `${field.name} must be shorter than ${maxLength} characters `)
    return false;
  }
}

function containsCharacters (field,code) {
  let regEx;
  switch(code){
    case 1:
    //letters
    regEx = /(?=.*[a-zA-Z])/
    return matchWithRegEx(regEx, field,`must contain at least 1 letter`)
    case 2:
    //letter and number
    regEx = /(?=.*\d)(?=.*[a-zA-Z])/
    return matchWithRegEx(regEx, field,`must contain at least 1 letter and number`)
    case 3:
    //letter and number
    regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/
    return matchWithRegEx(regEx, field,`must contain these characters:1 Upper case 1 Lower case 1 Number`)
    case 4:
    //letter and number
    regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
    return matchWithRegEx(regEx, field,`must contain these characters:1 Upper case 1 Lower case 1 Number, 1 special symbol`)
    case 5:
    //email
    regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return matchWithRegEx(regEx, field,`Must be a valid email address`)
    default:
      return false;
  }
}

function matchWithRegEx (regEx, field, message) {
  if(field.value.match(regEx)){
    setValid(field);
    return true;
  } else {
    setInvalid(field,message);
    return false;
  }
}
