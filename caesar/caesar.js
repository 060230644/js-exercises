var caesar = function(string, key) {
  let upperRegEx = /[A-Z]/;
  let lowerRegEx = /[a-z]/;
  let charCodeArray = [];
  let i;
  let cipherText = '';
  function testRegEx(regex) {
    return regex.test(string.charAt(i));
  }
  function pushCharToArray(code) {
    return charCodeArray.push((((((string.
      charCodeAt(i) + key) - code) % 26) + 26) % 26) + code);
  }
  function pushCharToString() {
    cipherText += String.fromCharCode(charCodeArray[i]);
  }
  for (i = 0; i < string.length; i++) {
    if (testRegEx(upperRegEx)) {
      pushCharToArray(65);
      pushCharToString();
    }
    else if (testRegEx(lowerRegEx)) {
      pushCharToArray(97);
      pushCharToString();
      }
    else {
      charCodeArray.push(string.charCodeAt(i));
      pushCharToString();
    }
  }
    return cipherText;
}

module.exports = caesar
