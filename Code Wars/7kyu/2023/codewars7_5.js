// Find the majority

// Goal
// Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

// If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

// Example
// majority(["A", "B", "A"]) returns "A"
// majority(["A", "B", "B", "A"]) returns null

// parameters array
// return string
// examples
// pseudo code create an object to hold the count of elements, iterate over the array adding each element if they have not been created otherwising increasing their value by 1, check to see if the resulting array only contains one element, otherwise check to see that it is not empty and that the first two elements are not the same

function majority(arr) {
  let holder = {};
  arr.map((x) => (holder[x] = holder[x] + 1 || 1));
  let sortedArr = Object.entries(holder).sort((x, y) => y[1] - x[1]);
  if (sortedArr.length == 1) {
    return sortedArr[0][0];
  } else if (sortedArr.length == 0 || sortedArr[0][1] === sortedArr[1][1]) {
    return null;
  } else {
    return sortedArr[0][0];
  }
}

// console.log(majority(["A", "B", "A"])); // "A"

// console.log(majority(["A", "B", "C"])); // null

// console.log(majority(["A", "B", "B", "A"])); // null

// console.log(majority(["A", "A", "A", "A"])); // "A"

// console.log(majority(["A"])); // "A"

// console.log(majority(["A", "A", "A", "BBBBBBBB"])); // "A"

// console.log(majority(["A", "B", "C", "C"])); // "C"

// console.log(majority([])); // null

// console.log(majority(["B", "C", "", ""])); // ""
