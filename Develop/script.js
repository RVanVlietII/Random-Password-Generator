// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  prompt("Choose a number between 8 and 28 for length of password.");
    prompt("Would you like lowercase letters?");
    prompt("Would you like uppercase letters?");
    prompt("Would you like numbers in your password?");
    prompt("Would you like special characters in your password?");
  var passwordText = document.querySelector("#password");


  Alert (passwordText.value = password); + ("Congrats on getting your new password");

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///My-Portfolio-Showcase/html-css-js.jpeg
