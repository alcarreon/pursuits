// Remove consecutive duplicate words

// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
// Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.

// parameters string
// return string
// examples
// psuedo code split the string into an array, then iterate over the array using filter and check to see that the element is not equal to the element after it join the resulting array back into a string

function removeConsecutiveDuplicates(str) {
  let splitStr = str.split(" ");
  return splitStr.filter((x, y) => x != splitStr[y + 1]).join(" ");
}

// console.log(removeConsecutiveDuplicates("alpha alphaalpha alphaalphaalpha")); // "alpha alphaalpha alphaalphaalpha"
console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
