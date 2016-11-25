function checkPassword(){
  var password = document.getElementById("password");
  var repeatPassword = document.getElementById("repeatPassword");

  if(password.value != repeatPassword.value) {
    repeatPassword.setCustomValidity("Passwords don't match");
  } else {
    repeatPassword.setCustomValidity('');
  }
}
