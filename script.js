// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector('#password');

 passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

var wantsPassword = '';
var passwordLength = '';
var hasLowercase = '';
var hasUppercase = '';
var hasNumericChars = '';
var hasSpecialChars = '';

var wantsGenerateAgain = '';
var wantsSameCriteria = '';

var characterSet = '';

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numericChars = '0123456789';
const specialChars = ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';

wantsPassword = confirm('Hello, would you like to generate a password?');

if (wantsPassword === true) {
 definePassword();
} else {
 alert('Thank you');
}

function getCharacterSet() {
 if (hasLowercase) {
  characterSet += lowercaseChars;
 }
 if (hasUppercase) {
  characterSet += uppercaseChars;
 }
 if (hasNumericChars) {
  characterSet += numericChars;
 }
 if (hasSpecialChars) {
  characterSet += specialChars;
 }
 console.log(characterSet);
}

function generatePassword() {
 alert('generating password');
}

function getParameters() {
 hasLowercase = confirm('Would you like to include lowercase characters?');
 hasUppercase = confirm('Would you like to include uppercase characters?');
 hasNumericChars = confirm('Would you like to include numeric characters?');
 hasSpecialChars = confirm('Would you like to include special characters?');
}

function getpasswordLength() {
 do {
  passwordLength = prompt(
   'How many characters would you like your password to be? (between 8-128 characters)'
  );
  if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
   alert('You must choose a number between 8 and 128');
  }
 } while (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8);
}

function definePassword() {
 alert('password being generated');
 getpasswordLength();

 do {
  getParameters();
  if (!hasLowercase && !hasUppercase && !hasNumericChars && !hasSpecialChars) {
   alert('you must select at least 1 criteria');
  }
 } while (
  !hasLowercase &&
  !hasUppercase &&
  !hasNumericChars &&
  !hasSpecialChars
 );

 getCharacterSet();
}
