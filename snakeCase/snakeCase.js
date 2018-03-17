var snakeCase = function(string) {
  // wtf case
  if (/\.{2}(?=[A-Za-z])/g.test(string) === true) {
    return string
    .replace(/\.{2}(?=[A-Za-z])/g, '_')
    .toLowerCase();
  }
  else {
    // remove punctuations
    let removedPunctuation = string.replace(/,|\?|\./g, '');
      // camelCase case
      if (/[a-z](?=[A-Z])/g.test(removedPunctuation) === true) {
        return removedPunctuation
        .replace(/[a-z](?=[A-Z])/g, "$&_")
        .toLowerCase();
      }
      else {
        return removedPunctuation
        .replace(/ |-/g, '_')
        .toLowerCase();
      }
  }
}

module.exports = snakeCase
