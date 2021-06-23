const specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];



generatePassword = () => {
  const options = getPasswordOptions();
  console.log(options)
}

getPasswordOptions = () => {
  let passwordLength = parseInt(prompt("Enter length of password"));
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    return null;
  }
  let containsSpecialCharacters = confirm("Click OK to confirm special characters in your password");
  let containsNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  let containsLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
  let cointainsUpperCasedCharacters = confirm("Click OK to confirm including uppercase characters.");

  if(containsSpecialCharacters === false && containsNumericCharacters === false && containsLowerCasedCharacters === false && cointainsUpperCasedCharacters === false) {
    alert("You must select at least one character set")
    return null;
  }
  
};

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
