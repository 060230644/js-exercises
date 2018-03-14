var repeatString = function(string, num) {
  var joinedString = '';
  if (num < 0) {
    return 'ERROR';
  }
  else {
    for (var i = 0; i < num; i++) {
      joinedString += string;
    }
    return  joinedString;
  }
}

module.exports = repeatString
