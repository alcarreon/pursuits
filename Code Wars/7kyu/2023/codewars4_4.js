// Indexed capitalization

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// For example:

// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.

// Good luck!

// parameters string array
// return string
// examples
// pseudo code given a string remove all elements from the array that are longer than the lenth of the string, create an empty variable to hold the result, iterate over the string and check to see if the index matches the current position in the string if it does uppercase the character, otherwise add the character to the string

function capitalize(str, arr) {
  let filterdArr = arr.filter((x) => x < str.length);
  let holder = "";
  for (let i = 0; i < str.length; i++) {
    if (filterdArr.indexOf(i) != -1) {
      holder += str[i].toUpperCase();
    } else {
      holder += str[i];
    }
  }
  return holder;
}

console.log(capitalize("abcdef", [1, 2, 5])); // 'aBCdeF'
console.log(capitalize("abcdef", [1, 2, 5, 100])); // 'aBCdeF'
console.log(capitalize("codewars", [1, 3, 5, 50])); // 'cOdEwArs'
console.log(capitalize("abracadabra", [2, 6, 9, 10])); // 'abRacaDabRA'
console.log(capitalize("codewarriors", [5])); // 'codewArriors'
console.log(capitalize("indexinglessons", [0])); // 'Indexinglessons'
