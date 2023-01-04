// Initialize my name

// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

// parameters string
// return string
// examples
// pseudo code split the string into an array and check to see if the length of the array is less than two if it is return the original string, otherwise iterate through the array and get the first character of the string for those that are not the first and last element

const initializeNames = (str) => {
  const splitStr = str.split(" ");
  if (splitStr.length <= 2) {
    return str;
  } else {
    return splitStr
      .map((x, y) => (y < splitStr.length - 1 && y > 0 ? `${x[0]}.` : x))
      .join(" ");
  }
};

console.log(initializeNames("Jack Ryan")); // 'Jack Ryan'
console.log(initializeNames("Lois Mary Lane")); // 'Lois M. Lane'
console.log(initializeNames("Dimitri")); // 'Dimitri'
console.log(initializeNames("Alice Betty Catherine Davis")); // 'Alice B. C. Davis'
