var fibonacci = function(index) {
  if (index < 0) {
    return "OOPS";
  }
  else {
  var array = [1,1];
  var i;
  for (i = 1; i < index; i++) {
    array.push(array[i-1]+array[i])
  }
  return array[i-1];
  }
}

module.exports = fibonacci
