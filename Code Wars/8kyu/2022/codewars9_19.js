// Swap Values

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// parameters none
// return number
// examples
// pseudo code args produces a nested array use bracket notation to access the first element of the nested array and then the first element in that array, set it equal to the next element using bracket notation

var arr = [1, 2];

function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0][0];
  args[0][0] = args[0][1];
  args[0][1] = temp;
}

console.log(arr[0]);
console.log(arr[1]);
console.log(swapValues());
