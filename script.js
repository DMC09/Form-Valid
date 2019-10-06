// Add the novalidate attribute when the JS loads
var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
  forms[i].setAttribute('novalidate', true);
}

// Validates the field
var hasError = function(field) {
  //gets the validity
  var validity = field.validity;
  // retuns if field is valid
  if (validity.valid) return;
  // retuns if field is empty
  if (validity.valueMissing) return 'Please fill out this field';
  // retuns if field is short
  if (validity.tooShort) return 'Please lengthen this text.';
  // retuns if field is long
  if (validity.tooLong) return 'Please shorten this text.';
  // retuns if field is not the right pattern
  if (validity.patternMismatch) {
    if (field.type === 'email') return 'Please include these characters 1 uppercase 1 lowercase 1 number';
    if (field.type === 'password') return 'hello';
  }
  //generic message
  return 'we cannot accept this'
}

//function to show the erros
var showError = function(field, error) {

  //Add a class
  field.classList.add('error');

  //gets the field id or name
  var id = field.id || field.name;
  if (!id) return;

  //checks if the message is already present
  //if not, create one
  var message = field.form.querySelector('.error-massage#error-for-' + id)
  if (!message) {
    message = document.createElement('div');
    message.className = 'error-message';
    message.id = 'error-for-' + id;

    //case when there is no label
    // if (!label) {
    //   field.parentNode.insertBefore(message, field.nextSibling)
    // }
  }

  //add ARIA role to the field
  field.setAttribute('aria-describedby', 'error-for-' + id);

  //update error message
  message.innerHTML = error;

  //show error message
  message.style.display = 'block';
  message.style.visibility = 'visible';

};


var removeError = function (field ) {

  //remove Erro class to field.
  field.classList.remove('error');

  //removes Aria
  field.removeAttribute('aria-describedby');

  // get the field id
  var id = field.id || field.name;
  if (!id) return;

  // check is the error is in the dom
  var message = field.form.querySelector('.error-message#error-for-' + id + "")

  //if there is an error hide it
  message.innerHTML = ''
  message.style.display = 'none'
  message.style.visibility = 'hidden'
}

//listens to all blue events
document.addEventListener('blur', function (event) {

    // Only run if the field is in a form to be validated
    if (!event.target.form.classList.contains('validate')) return;

    // Validate the field
    var error = hasError(event.target);

    // If there's an error, show it
    if (error) {
        showError(event.target, error);
        return;
    }

    // Otherwise, remove any existing error message
    removeError(event.target);

}, true);

//check all fiels on submit
document.addEventListener('submit', function (event){

  //only run on forms with validate
  if (!event.target.classList.contains('validate')) return;

  //get all of the form elements
  var fields = event.target.elements

  //validate field
  var error, hasErrors

  //if there is an error do not usbmit the form
  if(hasErrors) {
    event.preventDefault;
  }
}, false)
