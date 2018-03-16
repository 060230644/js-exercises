var palindromes = function(string) {
  let lowerString = string.toLowerCase();
  let regEx = /[a-z]/;
  let newString = '';
  let comparingString = '';
  let i;
  let l;
  // create a new string from input with no punctuations
  for (l = 0; l < string.length; l++) {
    if (regEx.test(lowerString[l]) == true) {
      newString += lowerString[l];
    }
    else {
      continue;
    }
  }
  // create a comparing string backwards
  for (i = lowerString.length-1; i >= 0; i--) {
    if (regEx.test(lowerString[i]) == true) {
    comparingString += lowerString[i];
    }
    else {
      continue;
    }
  }
  return comparingString == newString ? true : false;
}

module.exports = palindromes
