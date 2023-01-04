// Type of sum

// parameters two characters
// return string
// examples
// pseudo code given two characters add them together then use typeof to find their type

function typeOfSum(a, b) {
  return typeof (a + b);
}

console.log(typeOfSum(true, 1)); //'number'
console.log(typeOfSum("s", false)); //'string'
console.log(typeOfSum(null, undefined)); //'number'
console.log(typeOfSum(undefined, true)); //'number'
console.log(typeOfSum(null, false)); //'number'
console.log(typeOfSum(typeOfSum("d", 1))); // 'string'
