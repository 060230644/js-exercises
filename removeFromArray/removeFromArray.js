var removeFromArray = function(array, delItem) {
  // loop for removing an item from array one by one
  for (var args = 1; args < arguments.length; args++) {
    // asks if the value is in array
    if (!(array.indexOf(arguments[args]) > -1)) {
      continue;
    }
    else {
    // get item index of the value
    itemIndex = array.indexOf(arguments[args]);
    // remove that value from array by using index
    array.splice(itemIndex, 1);
    }
  }
  return array;
}

module.exports = removeFromArray
