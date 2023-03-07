// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// parameters string
// return string
// examples
// pseudo code given a string check to see if an exclamation point is the first character and that it is the only exclamation point, then check to see if the last exclamation point is before the end of the string, and finally check to see that there is an exclamation point in the string, otherwise return the string by slicing it at the last index of the exclamation point

let remove = (str) => {
  if (
    (str.indexOf("!") == 0 && str.indexOf("!") == str.lastIndexOf("!")) ||
    str.lastIndexOf("!") != str.length - 1 ||
    str.indexOf("!") == -1
  ) {
    return str;
  } else {
    return str.slice(0, str.lastIndexOf("!"));
  }
};

console.log(remove("Hi!")); // "Hi"

console.log(remove("Hi!!!")); // "Hi!!"

console.log(remove("!Hi")); // "!Hi"

console.log(remove("Hi! Hi!")); // "Hi! Hi"

console.log(remove("Hi")); // "Hi"

console.log(remove("!Hi!!!!")); // "!Hi"

console.log(remove("imtzky! dak")); // 'imtzky! dak'
