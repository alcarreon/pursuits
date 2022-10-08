// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// parameters array
// return number
// examples
// pseudo code given an array create a variable to hold an object of the number of times each number appears, create another variable which will convert the object into an array then sort the array based on the second element each sub array, finally create another variable to hold the number or numbers which appear the most amount of times, if there are more than one number sort the array by the first element

const highestRank = (arr) => {
  var countedNums = arr.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});

  let nums = Object.entries(countedNums).sort((x, y) => y[1] - x[1]);
  let largestNums = nums.filter((x) => x[1] == nums[0][1]);
  if (largestNums.length == 1) {
    return +largestNums[0][0];
  } else {
    let sortedNums = largestNums.sort((x, y) => +y[0] - +x[0]);
    return +sortedNums[0][0];
  }
};

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
// console.log(highestRank([1, 5, 5, 3, 3, 3, 5, 5, 3])); // 12
