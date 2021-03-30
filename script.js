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

//THIS WILL BE THE HARD PART ---------------------------------------------------------------------------------------
function getCharacterSet() {
 var parameterCount = 0;
 if (hasLowercase) {
  parameterCount += 1;
 }
 if (hasUppercase) {
  parameterCount += 1;
 }
 if (hasNumericChars) {
  parameterCount += 1;
 }
 if (hasSpecialChars) {
  parameterCount += 1;
 }

 console.log('parameterCount :>> ', parameterCount);

 var characterPools = [];

 while (characterPools.length < parameterCount) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (characterPools.indexOf(r) === -1) characterPools.push(r);
 }
 console.log('characterPools :>> ', characterPools);

 var total = 0;
 for (var i in characterPools) {
  total += characterPools[i];
 }
 console.log('total :>> ', total);

 var finalArray = [];
 console.log('finalArray :>> ', finalArray);
}

// get a number of how many paramaters are true   CHECK
// divide passwordLength unevenly in that many parts
// assign each part to 1 new var
// run each variable into a randomizer based on its own const chartype variable
// this creates a new variable for each
// now we concatenate each new variable

// WORKING IN HERE PRIMARILY ----------------------------------------------------------------------------------------

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

// create 4 pools - 1 for each charType: then we take the passwordLength and divide it randomly between
//
// those 4 pools, so each pool is assigned a number (passwordPercent?) we then take that number for each charType and
//
// randomize the characters for its own string length
//
// then we concatenate the 4 strings
//
// then we send that concated string to an array

// scramble the array

// .toString it

// there is your password
