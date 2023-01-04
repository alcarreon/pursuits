// Find Count of Most Frequent Item in an Array
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5
// The most frequent number in the array is -1 and it occurs 5 times.

// parameters array
// return integer
// examples
// pseudo code check to see that the array is not empty, if the array is not empty create an empty object to hold the count of each element, use filter to add elements to the initially empty object and update it everytime the same element is encountered

const mostFrequentItemCount = (arr) => {
  if (arr.length == 0) {
    return 0;
  } else {
    let counter = {};
    arr.filter((x) => (counter[x] = counter[x] + 1 || 1));
    let totals = Object.entries(counter).sort((x, y) => y[1] - x[1]);

    return totals[0][1];
  }
};

console.log(mostFrequentItemCount([3, -1, -1])); // 2

console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
); // 5
