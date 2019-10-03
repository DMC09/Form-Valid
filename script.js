const mainForm = document.querySelector('#myForm');
const fname = document.querySelector('#firstname');
const lname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');


console.log(mainForm)





// mainForm.addEventListener("submit", function(event) {
//   if (fname.value == "" || fname.value == null) {
//     event.preventDefault();
//     var fmessage = document.createTextNode("Please put something!");
//     fname.nextElementSibling.appendChild(fmessage);
//   }
// });

fname.addEventListener("focus", function(event) {
  console.log('hello')
const ferror = document.createElement("span")
const message = document.createTextNode("swag");
ferror.appendChild(message);
fname.nextElementSibling.appendChild(ferror);

})

lname.addEventListener("focus", function(event){
  errorbase = fname.nextElementSibling
  if (errorbase.hasChildNodes()) {
    errorbase.removeChild(errorbase.childNodes[0]);
  }

  // console.log(fname.nextElementSibling)


});

// fname.nextElementSibling.removeChild();
// var clear = document.createTextNode("");
// fname.nextElementSibling.appendChild(clear);
