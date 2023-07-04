// Even or Odd - Which is Greater?

// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// parameters string
// return string
// examples
// pseudo code split the string by each character, then create arrays for the even and odd numbers, iterate over the split string and push the element to its respective array, reduce the arrays containing the odds and evens then compare them

function evenOrOdd(str) {
  let splitStr = str.split("");
  let even = [];
  let odd = [];
  splitStr.map((x) => (+x % 2 == 1 ? odd.push(+x) : even.push(+x)));
  let totalEven = even.reduce((x, y) => x + y, 0);
  let totalOdd = odd.reduce((x, y) => x + y, 0);
  if (totalEven == totalOdd) {
    return "Even and Odd are the same";
  } else if (totalEven < totalOdd) {
    return "Odd is greater than Even";
  } else {
    return "Even is greater than Odd";
  }
}

console.log(evenOrOdd("12")); // "Even is greater than Odd"
console.log(evenOrOdd("123")); // "Odd is greater than Even"
console.log(evenOrOdd("112")); // "Even and Odd are the same"
