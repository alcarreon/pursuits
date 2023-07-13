// Identical Elements

// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

// parameters two arrays
// return boolean
// examples
// psuedo code iterate through one of the arrays and check to see if the element is a part of the other array, filter the resulting array only including elements that are true, check to see that there is at least one element in the array

function duplicateElements(arr1, arr2) {
  return arr1.map((x) => arr2.includes(x)).filter((x) => x == true).length >= 1;
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])); // true

console.log(duplicateElements([9, 8, 7], [8, 1, 3])); // true

console.log(duplicateElements([1, 2], [3, 4])); // false
