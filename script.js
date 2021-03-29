// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var wantsPassword = ''
var characterNumber = ''
var hasLowercase = ''
var hasUppercase = ''
var hasNumericChars = ''
var hasSpecialChars = ''


var wantsGenerateAgain = ''
var wantsSameCriteria = ''



var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
var numericChars = '0123456789'
var specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'

wantsPassword = confirm('Hello, would you like to generate a password?')

if (wantsPassword === true) {
} else {
}

function getParameters() {
  hasLowercase = confirm('Would you like to include lowercase characters?')
  hasUppercase = confirm('Would you like to include uppercase characters?')
  hasNumericChars = confirm('Would you like to include numeric characters?')
  hasSpecialChars = confirm('Would you like to include special characters?')
}

function getCharacterNumber() {
  do {characterNumber = prompt('How many characters would you like your password to be? (between 8-128 characters)');
  if (isNaN(characterNumber) || characterNumber > 128 || characterNumber < 8 ) {
    alert('You must choose a number between 8 and 128')
  }
    
} while (isNaN(characterNumber) || characterNumber > 128 || characterNumber < 8 );
}



function generatePassword() {
  alert('password being generated')
  getCharacterNumber()

  console.log(characterNumber)

  getParameters()

  if (hasLowercase || hasUppercase || hasNumericChars || hasSpecialChars) {
    alert('generating password')
  } else {
    alert('must select at least 1 criteria')
    getParameters()
  }
  
  





}


generatePassword()