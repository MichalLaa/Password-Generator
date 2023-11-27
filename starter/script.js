// Array of special characters to be included in password
function generatePassword() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var aLowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  // Function to prompt user for password options
  numOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
  if (numOfCharacters < 8 || numOfCharacters > 128) {
    return "Please choose a valid number of characters!";
  } else if (isNaN(numOfCharacters)) {
    numOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numOfCharacters + " characters long :)");
    
  }

  aLowercase = confirm("Do you want lowercase characters?");
  if (aLowercase) {
    var turnaLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will not! have lowercase characters.");
  }

  aUppercase = confirm("Do you want uppercase characters?");
  if (aUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will not! have uppercase characters.");
  }

  aNumbers = confirm("Do you want to use numbers?");
  if (aNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will not! have numbers.");
  }

  aSpecial = confirm("Do you want special characters?");
  if (aSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will not! have special characters.");
  }

  if (aLowercase === false && aUppercase === false && aNumbers === false && aSpecial === false) {
    return "Please select at least one character!!";
  };

 // Function to generate password with user input
  if (aLowercase) {
    possibleCharacters = possibleCharacters.concat(aLowercaseCharacters);
  }
  if (aUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (aNumbers) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (aSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Final password code 
  let finalPassword = ""
  for (let i = 0; i < numOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);