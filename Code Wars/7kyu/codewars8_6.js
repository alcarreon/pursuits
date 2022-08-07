// sort array by last character
// Sort array by last character

// Complete the function to sort a given array or list by last character of elements.

// Element can be an integer or a string.

// Example:
// ['acvd', 'bcc']  -->  ['bcc', 'acvd']
// The last characters of the strings are d and c. As c comes before d, sorting by last character will give ['bcc', 'acvd'].

// If two elements don't differ in the last character, then they should be sorted by the order they come in the array.

// parameters array
// returns array
// examples
// pseudo code sort through the array of strings using local compare to see which comes alphabetically if they are the same then use the index of the first element

const sortMe = (arr) =>
  arr
    .slice()
    .sort(
      (a, b) =>
        `${a}`.slice(-1).localeCompare(`${b}`.slice(-1)) ||
        arr.indexOf(a) - arr.indexOf(b)
    );

console.log(sortMe(["acvd", "bcc"])); // ['bcc','acvd']
console.log(sortMe(["14", "13"])); // ["13", "14"]
console.log(sortMe(["asdf", "asdf", "14", "13"])); // ["13", "14", "asdf", "asdf"]
// console.log(sortMe(["bsde", "asdf", 14, "13"])); // ["13", 14, "bsde", "asdf"]
console.log(sortMe(["asdf", 14, "13", "asdf"])); // ["13", 14, "asdf", "asdf"]
