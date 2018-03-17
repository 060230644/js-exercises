function translate(string) {
	const specialRegEx = /^squ|qu/;
	const vowelRegEx = /^[aeiou]/;
	const consonantRegEx = /^[^aeiou]{1,3}/;
	const stringArray = string.split(" ");
	let substractedStr;
	let i;
	// split multiple words in a string into an array of words
	let translatedString = '';
	// test if the word follows the regex
	function regExTest(regex) {
		return regex.test(stringArray[i]);
	}
	function startProcess(regex) {
		consonant = regex.exec(stringArray[i])[0];
		substractedStr = stringArray[i].replace(consonant, "");
		translatedString +=  substractedStr + consonant + 'ay' + ' ';
	}
	// loop through each word from the input
	for (i = 0; i < stringArray.length; i++) {
		if (regExTest(vowelRegEx)) {
			translatedString += stringArray[i] + 'ay' + ' ';
		}
		// special case (qu / squ)
		else if (regExTest(specialRegEx)) {
			startProcess(specialRegEx);
		}
		// up to 3 consonants
		else if (regExTest(consonantRegEx)) {
			startProcess(consonantRegEx);
		}
		else {
			return "Invalid Input";
		}
	}
	// remove the last space from the string
	return translatedString.slice(0, -1);
}

module.exports = {
	translate
}
