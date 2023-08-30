// Reversing Fun

// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

// Let's say you start with this: 012345

// The first thing you do is reverse it:543210
// Then you will take the string from the 1st position and reverse it again:501234
// Then you will take the string from the 2nd position and reverse it again:504321
// Then you will take the string from the 3rd position and reverse it again:504123

// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:504132

// #Input: A string of length 1 - 1000

// #Output: A correctly reordered string.

// parameters string
// return string
// examples
// psuedo code create an empty array to hold the result, and a variable to hold the array after spliting the string by each character, iterate over the length of the string, at each element pushing the result of reversing the array and removing the first element to the empty array, join the array back into a string

function flipNumber(str) {
  let holder = [];
  let splitStr = str.split("");
  for (let i = 0; i < str.length; i++) {
    holder.push(splitStr.reverse().shift());
  }
  return holder.join("");
}

// console.log(flipNumber("012")); // "201"
// console.log(flipNumber("012345")); // "504132"
// console.log(flipNumber("0123456789")); // "9081726354"
console.log(flipNumber("0123")); // "3021"
