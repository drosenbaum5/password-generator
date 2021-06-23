// Assignment Code
const generateBtn = document.querySelector("#generate");

generatePassword = () => {
  const options = getPasswordOptions();
  console.log(options);
  let password = buildPassword(options) 
};

getPasswordOptions = () => {
  const passwordLength = parseInt(prompt("Enter length of password"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters");
    return null;
  }
  const containsSpecialCharacters = confirm( "Click OK to confirm special characters in your password" );
  const containsNumericCharacters = confirm("Click OK to confirm including numeric characters.");
  const containsLowerCasedCharacters = confirm("Click OK to confirm including lowercase characters.");
  const containsUpperCasedCharacters = confirm( "Click OK to confirm including uppercase characters." );

  if (
    containsSpecialCharacters === false &&
    containsNumericCharacters === false &&
    containsLowerCasedCharacters === false &&
    cointainsUpperCasedCharacters === false
  ) {
    alert("You must select at least one character set");
    return;
  }
  const passwordOptions = {
    length: passwordLength,
    special: containsSpecialCharacters,
    numeric: containsNumericCharacters,
    lower: containsLowerCasedCharacters,
    upper: containsUpperCasedCharacters
  }

  return passwordOptions;
};


buildPassword = ({length, special, numeric, lower, upper}) => {
  let possibleCharSet = [];
  console.log(length, special, numeric, lower, upper)
  
}

random = (options) => {
  const index = Math.floor(Math.random() * options.length);
  const randomChar = options[index];
  return randomChar;
}

// Write password to the #password input
writePassword = () => {
  const password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
