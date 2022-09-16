// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// parameters array
// return number
// examples
// pseudo code given an array create an object holding the number of instances a number occurers in the array, then create a variable to hold the keys of the object, iterate through the keys of the object and check to see if their value is equal to one

const findUniq = (arr) => {
  const countedChar = arr.reduce((allNum, num) => {
    const currCount = allNum[num] ?? 0;
    return {
      ...allNum,
      [num]: currCount + 1,
    };
  }, {});
  let keys = Object.keys(countedChar);
  for (let i = 0; i < keys.length; i++) {
    if (countedChar[keys[i]] == 1) {
      return +keys[i];
    }
  }
};

// console.log(findUniq([1, 0, 0])); // 1
// console.log(findUniq([0, 1, 0])); // 1
// console.log(findUniq([0, 0, 1])); // 1
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([1, 1, 2, 1, 1])); // 2
// console.log(findUniq([3, 10, 3, 3, 3])); // 10
