// Assignment Code

//1st step: list the variables needed
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "1234567890";
var symbolCharacters = "!@#$%^&*()";
var possibleCharacters = "";
var finalPassword = "";

//2nd step: list the alerts


alert("Welcome! Please click the generate button below to create a password");



function makeAPassword() {
  var length = prompt("Before continuing further, please type in a numerical value (i.e. 12) that is between 8-128 characters to determine the length of your password.");
  console.log(length)

  if(length < 8 || length > 128) {
    alert("The password MUST be between 8 and 128 characters");
    return makeAPassword();
  }

  var symbolChoice = confirm("Would you like to add special characters to your password?");
  console.log(symbolChoice)
  if (symbolChoice === true) {
    possibleCharacters = possibleCharacters + symbolCharacters;
  }


  var upperChoice = confirm("Would you like to add upper case characters to your password?");
  if (upperChoice === true) {
    possibleCharacters = possibleCharacters + upperCaseCharacters;
  }

  // confirm the result in true or false booleans, you can use it right away instead of storing it in a variable that you'll immediately use
  if (confirm("Would you like to add lower case characters to your password?") === true) {
    possibleCharacters = possibleCharacters + lowerCaseCharacters;
  }

  var numberChoice = confirm("Would you like to add number characters to your password?");
  if (numberChoice === true) {
    possibleCharacters = possibleCharacters + numberCharacters;
  }

  console.log(possibleCharacters)


  //3rd step: writing out the functions
  function password(i, characters) {
    var pwd = " ";
  }

  // if there's nothing in possibleCharacters, stop function
  if (!possibleCharacters) {
    alert("You need to tell us what characters you would like to add!");
    return;
  }

  //4th step: write a for loop 
  for (var i = 0; i < length; i++) {
    var num = Math.floor(Math.random() * possibleCharacters.length)
    var randomChar = possibleCharacters[num];
    //upperCaseCharacters.charAt(num);
    finalPassword = finalPassword + randomChar;
  }

  console.log(finalPassword)
  document.getElementById("password").value = finalPassword;
}

var button = document.getElementById("generate");
button.addEventListener("click", makeAPassword);

//function to copy password to clipboard

function myFunction() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
  alert("Congratulations! your password has just been copied to the clipboard. Your password is: " + copyText.value);
};

var copyButton = document.getElementById("copyToClipBoard");
copyButton.addEventListener("click", myFunction);