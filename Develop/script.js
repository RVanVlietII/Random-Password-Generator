
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  var length = parseInt(prompt("Type a number between 8 and 128"));
  if (isNaN(length) || length < 8 || length > 128){
    alert ("Please start over with a number between 8 and 128");
    return false 
  }
  var addlowerCase = confirm("Would you like lowercase letters? (OK=Yes, Cancel=No)");
  var addupperCase = confirm("Would you like UPPERCASE LETTERS? (OK=Yes, Cancel=No)");
  var addnumber = confirm("Would you like numbers (123456789)? (OK=Yes, Cancel=No)");
  var addspecialChar = confirm("Would you like Special Characters? (OK=Yes, Cancel=No)");

  var characterList = "";

  if (addlowerCase) {
    characterList += ['a','b','c','d','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  }
  if (addupperCase) {
    characterList += ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }
  if (addnumber) {
    characterList += ['1','2','3','4','5','6','7','8','9','0'];
  }
  if (addspecialChar) {
    characterList += ['!','"','#','$','%','&','()','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',','^','_','`','{','|','}','~',']'];
  }
  
  var password = generatePassword(length, characterList); 
  function generatePassword(length, characterList) {
    var password = ""
    for (var i = 0; i < length; i++) {
      var randomNum = Math.floor(Math.random() * characterList.length);
      var randomCharacter = characterList[randomNum];
      password += randomCharacter;
  }
  return password;
}
var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
