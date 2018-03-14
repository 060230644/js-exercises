var reverseString = function(string) {
  //declare a variable as an empty string
  var joinedString = '';
  // joins string character by character
  for (var i = string.length-1; i >= 0; i--) {
    joinedString += string.charAt(i);
}
  return joinedString;
}

module.exports = reverseString
