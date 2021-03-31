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

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// -------------------- VARIABLES INITIALIZED -------------------
var wantsPassword = '';
var passwordLength = '';
var hasLowercase = '';
var hasUppercase = '';
var hasNumericChars = '';
var hasSpecialChars = '';
var wantsGenerateAgain = '';
var wantsSameCriteria = '';
var characterSet = '';
var finalPasswordArray = [];
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numericChars = '0123456789';
const specialChars = ' !"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
var finalPassword = '';
var randomPasswordArray = [];
var beginningPasswordArray = [];

// VARIABLES INITIALIZED
// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
//
//
//
//
//
//
//
//
//
//
// ------------------ GENERAL PURPOSE FUNCTIONS---------------------------------------------------

//generates a random number between min and max (inclusive min exclusive max)
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
// ---------------------------------------------------------------------------------
//
//
//
//
//
//
//
//
//
// ------------------------- APPLICATION FUNCTIONS --------------------------------------------------------------
//
function getPasswordLength() {
	do {
		passwordLength = prompt(
			'How many characters would you like your password to be? (between 8-128 characters)'
		);
		if (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8) {
			alert('You must choose a number between 8 and 128');
		}
	} while (isNaN(passwordLength) || passwordLength > 128 || passwordLength < 8);
}

function getCharacterSet() {
	if (hasUppercase) {
		characterSet += uppercaseChars;
	}
	if (hasLowercase) {
		characterSet += lowercaseChars;
	}
	if (hasNumericChars) {
		characterSet += numericChars;
	}
	if (hasSpecialChars) {
		characterSet += specialChars;
	}
}

function getParameters() {
	hasLowercase = confirm('Would you like to include lowercase characters?');
	console.log('hasLowercase :>> ', hasLowercase);
	hasUppercase = confirm('Would you like to include uppercase characters?');
	console.log('hasUppercase :>> ', hasUppercase);
	hasNumericChars = confirm('Would you like to include numeric characters?');
	console.log('hasNumericChars :>> ', hasNumericChars);
	hasSpecialChars = confirm('Would you like to include special characters?');
	console.log('hasSpecialChars :>> ', hasSpecialChars);
	getCharacterSet();
	console.log('characterSet :>> ', characterSet);
}

// =================================================================================================================================
// going to pull 1 character from each chosen pool to ensure it has 1 of all chosen criteria

function ensureEachCriteria() {
	if (hasUppercase) {
		beginningPasswordArray.push(getOneRandomCharacter(uppercaseChars));
	}
	if (hasLowercase) {
		beginningPasswordArray.push(getOneRandomCharacter(lowercaseChars));
	}
	if (hasNumericChars) {
		beginningPasswordArray.push(getOneRandomCharacter(numericChars));
	}
	if (hasSpecialChars) {
		beginningPasswordArray.push(getOneRandomCharacter(specialChars));
	}
}

function getOneRandomCharacter(chartype) {
	var randomNumber = getRandomNumber(0, chartype.length);
	return chartype.charAt(randomNumber);
}

function getRandomPasswordArray() {
	// generate (passwordLength - beginningPasswordArray.length) random characters from variableCharacterSet and push them to the array
	for (let i = 0; i < passwordLength - beginningPasswordArray.length; i++) {
		randomPasswordArray.push(getOneRandomCharacter(characterSet));
	}
}


function combinePasswords() {
	finalPasswordArray = beginningPasswordArray.concat(randomPasswordArray);
	finalPasswordArray = shuffle(finalPasswordArray);
	finalPassword = finalPasswordArray.join('');
}

function definePassword() {
	console.log('about to get password length');

	getPasswordLength();
	console.log('passwordLength :>> ', passwordLength);
	console.log('about to get password parameters');

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

}

function generatePassword() {
	ensureEachCriteria();
	getRandomPasswordArray();
	combinePasswords();
	console.log('finalPassword :>> ', finalPassword);
	alert(`Your password is: ${finalPassword} `);
}
// =================================================================================================================================
//
wantsPassword = confirm('Hello, would you like to generate a password?');

if (wantsPassword === true) {
	definePassword(); // FINAL PASSWORD ALERT OR WRITE-TO-PAGE INSIDE THIS IF ELSE (IF THEY CANCEL THE PROGRAM DO NOT WRITE NULL PASSWORD)
	generatePassword();
} else {
	alert('Thank you');
}

wantsGenerateAgain = confirm('Would you like to generate the password again?')

if (wantsGenerateAgain) {
	wantsSameCriteria = confirm('Would you like to use the same criteria?')
	if (wantsSameCriteria) {
		generatePassword();
	} else {
		alert('this is being implemented soon')
	}
} else {
	alert('Thank you')
}
