// Alphabetize a list by the nth character

// Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

// The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

// parameters array, num
// returns string
// examples
// psuedo code given an array and a number split it into a string and then sort it by accessing the part of the string we want to compare, return 0, 1 -1 depending on whethere or not the strings matched or determing which letter was larger

const sortIt = (arr, n) =>
  arr
    .split(`, `)
    .sort(
      (a, b) =>
        a[n - 1].toLowerCase().localeCompare(b[n - 1].toLowerCase()) ||
        a.localeCompare(b)
    )
    .join(`, `);
console.log(sortIt("bill, bell, ball, bull", 2)); // 'ball, bell, bill, bull'
console.log(sortIt("cat, dog, eel, bee", 3)); // 'bee, dog, eel, cat'
