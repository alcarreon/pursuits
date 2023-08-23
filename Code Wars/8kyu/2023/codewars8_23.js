// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// parameters string
// return string
// examples
// psuedo code split the string in an array by each character, and then iterate over it checking to see if each element is an exclamation point, if it is not return the position within the array, then filter the array to remove any undefined elements, lastly use slice on the original array to remove the exclamation points

function remove(str) {
  let splitStr = str
    .split("")
    .map((x, y) => {
      if (x != "!") {
        return y;
      }
    })
    .filter((x) => x != undefined);
  return str.slice(0, splitStr[splitStr.length - 1] + 1);
}

console.log(remove("Hi!")); // "Hi"

console.log(remove("Hi!!!")); // "Hi"

console.log(remove("!Hi")); // "!Hi"

console.log(remove("!Hi!")); // "!Hi"

console.log(remove("Hi! Hi!")); // "Hi! Hi"

console.log(remove("Hi")); // "Hi"
