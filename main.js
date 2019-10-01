const fname = document.getElementById('firstname')
const fnerr = document.getElementById('helper-text');

fname.addEventListener('onblur', validateFirstName,)

function validateFirstName(event) {
  // console.log(fname.value)
  if (fname.value === '') {
    fnerr.innerHTML = 'hello'
  }
}
