const mainForm = document.querySelector('#myForm');
const fname = document.querySelector('#firstname');
const lname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');

console.log(mainForm)

// fname.value


fname.addEventListener("input", function(event) {
  if(!fname.value == ""){
    fname.nextElementSibling
  }
}

mainForm.addEventListener("submit", function(event) {
  if (fname.value == "" || fname.value == null) {
    event.preventDefault();
    fname.nextElementSibling.innerHTML = 'hi'
  }

})
