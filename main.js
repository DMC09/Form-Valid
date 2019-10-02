const fname = document.getElementById('firstname')
const fnerr = document.getElementById('helper-text');

fname.addEventListener('onblur', validateFirstName,)

if (validateFirstName == false) {
  document.getElementById("register").innerHTML = "black";
}

function validateFirstName(event) {
  // console.log(fname.value)
  if (fname.value === 'black') {
    // fnerr.innerHTML = 'hello'
    return false
  } else
  return true;
}
