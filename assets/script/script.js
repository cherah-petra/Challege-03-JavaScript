// Characters for selection prompts

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numeric = '0123456789';
var specialChar = '\' !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
var CombinedPassword = '';
var FinalPassword ='';





// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  const passwordLength = prompt('Length of password?');
  console.log(passwordLength)


  if (passwordLength >= 8 && passwordLength <= 128){
    const inLNumbers = confirm('numeric');
    const inLSpecialChar = confirm('specialChar');
    const inLlowerCase = confirm('lowercase');
    const inLupperCase = confirm('upperCase'); console.log('OK?')
    if (inLNumbers){
      CombinedPassword += numeric
    }
    if (inLSpecialChar){
      CombinedPassword += specialChar
    }
    if (inLlowerCase){
      CombinedPassword += lowerCase
    }
    if (inLupperCase) {
      CombinedPassword += upperCase
    }
    if (!inLNumbers && !inLSpecialChar && !inLlowerCase && !inLupperCase){
    alert('Uppercase will be used since no selection was made.')
      CombinedPassword += upperCase
    }
  for (i=0; i<passwordLength; i++){
    FinalPassword += CombinedPassword[Math.floor(Math.random()*CombinedPassword.length)]
}
  return FinalPassword
  } else {
    alert('Enter value between 8 - 128');
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

