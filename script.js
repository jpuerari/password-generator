// Assignment Code

//1st step: list the variables needed
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "1234567890";
var symbolCharacters = "!@#$%^&*()";
var possibleCharacters = "";
var finalPassword = "";

//2nd step: list the alerts


alert("welcome, please click the generate button below");



function makeAPassword(){
var length = prompt("Before continuing further, please choose a length that is 8-128 characters long.");
console.log(length)
if (isNaN(length)){
  alert("Please enter an appropriate length");
}

var symbolChoice = confirm("Do you want special characters?");
console.log(symbolChoice)
if(symbolChoice === true){
  possibleCharacters = possibleCharacters + symbolCharacters;
}


var upperChoice = confirm("Do you want upper case characters?");
if(upperChoice === true){
  possibleCharacters = possibleCharacters + upperCaseCharacters;
}

// confirm will result in true or false, you can use it right away instead of storing it in a variable that you'll immediately use
if(confirm("Do you want lower case characters?") === true){
  possibleCharacters = possibleCharacters + lowerCaseCharacters;
}

var numberChoice = confirm("Do you want number characters?");
if(numberChoice === true){
  possibleCharacters = possibleCharacters + numberCharacters;
}

console.log(possibleCharacters)


//3rd step: writing out the functions
function password (i,characters) {
  var pwd = " ";
 }

//4th step: write a for loop so user cancel out
for(var i = 0; i<length; i++){
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
function copyPassword(){
  document.getElementById("copyToClipBoard").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!")
}

 //add password to textbox/display area
 document.getElementById("display").value = password;




