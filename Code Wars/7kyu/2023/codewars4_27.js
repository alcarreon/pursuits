// Sorting Dictionaries

// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

// The list must be sorted by the value and be sorted largest to smallest.

// Examples
// sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
// sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

// parameters object
// return array
// examples
// pseudo code conver the object into an array, then sort the array based on the second element of the nested array, check to see if the element is in the alphabet

function sortDict(dict) {
  return Object.entries(dict)
    .sort((x, y) => y[1] - x[1])
    .map((x) => {
      if (!(x[0].toLowerCase() != x[0].toUpperCase())) {
        return [+x[0], x[1]];
      } else {
        return x;
      }
    });
}

console.log(sortDict({ 1: 3, 2: 2, 3: 1 })); // [[1,3],[2,2],[3,1]]

console.log(sortDict({ 3: 1, 2: 2, 1: 3 })); // [[1,3],[2,2],[3,1]]

console.log(sortDict({ a: 6, b: 2, c: 4 })); // [['a',6],['c',4],['b',2]]

// console.log(sortDict({ aldo: 6, boris: 2, igor: 6 })); // [['aldo',6],['igor',6],['boris',2]]
