// What dominates your array?

// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.

// parameters array
// return integer
// examples
// pseudo code create an empty variable to hold an object, then filter through the array checking to see if the element is in the object adding 1 to its value, otherwise create a key with an initial value of 1, convert the object into an array and sort the array by the second element of each sub array, then check to see if the first element of the array is larger than half the length of the array

let dominator = (arr) => {
  let counter = {};
  arr.filter((x) => (counter[x] = counter[x] + 1 || 1));
  let total = Object.entries(counter).sort((x, y) => y[1] - x[1]);
  if (total[0][1] > arr.length / 2) {
    return total[0][0];
  } else {
    return -1;
  }
};

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3])); // 3

console.log(dominator([1, 2, 3, 4, 5])); // -1

console.log(dominator([1, 1, 1, 2, 2, 2])); // -1

console.log(dominator([1, 1, 1, 2, 2, 2, 2])); // 2
