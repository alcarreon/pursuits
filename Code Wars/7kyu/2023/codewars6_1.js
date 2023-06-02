// Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark

// Description:
// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// parameters string
// return string
// examples
// pseudo code split the string into an array and use filter to iterate over the array, if the indexes of the first and last exclamation point dont match or the element doesnt include an exclamation point keep it in the array, finally join the array back into a string

function remove(str) {
  let splitStr = str.split(" ");
  return splitStr
    .filter((x) => {
      return x.indexOf("!") != x.lastIndexOf("!") || x.includes("!") == false;
    })
    .join(" ");
}

console.log(remove("Hi!")); // ''

console.log(remove("Hi! Hi!")); // ''

console.log(remove("Hi! Hi! Hi!")); // ''

console.log(remove("Hi Hi! Hi!")); // 'Hi'

console.log(remove("Hi! !Hi Hi!")); // ''

console.log(remove("Hi! Hi!! Hi!")); // "Hi!!"

console.log(remove("Hi! !Hi! Hi!")); // "!Hi!"
