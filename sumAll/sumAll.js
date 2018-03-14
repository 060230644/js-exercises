var sumAll = function(firstnum, secondnum) {
    // returns error message if the number is negative or is NaN
    if (firstnum < 0 || secondnum < 0 ||
        (typeof(firstnum)) !== 'number' ||
        ((typeof(secondnum)) !== 'number')) {
      return 'ERROR';
    }
    // swap first number to second if the second is greater
    else if (firstnum > secondnum) {
      swap = secondnum;
      secondnum = firstnum;
      firstnum = swap;
    }
    // loop for populating the sum
    var sum = firstnum;
    for (var counter = firstnum; counter < (secondnum); counter++) {
      sum =  sum + (counter + 1);
    }
    return sum;
}

module.exports = sumAll
