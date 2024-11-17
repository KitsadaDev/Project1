var splash = document.getElementById('splash')
var loginForm = document.getElementById('login-form')
var loginEmail = document.getElementById('login-email')
var loginPassword = document.getElementById('login-password')
var loginEmailParent = loginEmail.parentNode
var loginPasswordParent = loginPassword.parentNode

loginForm.addEventListener('submit', function (event) {
  event.preventDefault()

  var success = true
  loginEmailParent.classList.remove('error')
  loginPasswordParent.classList.remove('error')

  if(loginEmail.value.trim() === '') {
    loginEmailParent.classList.add('error')
    success = false;
  }

  if(loginPassword.value === '') {
    loginPasswordParent.classList.add('error')
    success = false;
  }

  if(success) {
    splash.classList.remove('out')
    ready()
  }
})

function ready() {
  setTimeout(function () {
    splash.classList.add('out')
  }, 1000)
}

ready()