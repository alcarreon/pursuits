// Sum of Odd Cubed Numbers
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// parameters array
// returns number
// examples
// pseudo code given an array check to see that every element is a number otherwise give the element the value of undefined, otherwise cube the element, then check to see if undefined is included in the array and if it is return undefined, otherwise find the odd numbers and reduce the array

const cubeOdd = (arr) => {
  let cubed = arr.map((x) => {
    if (typeof x != "number") {
      return undefined;
    } else {
      return Math.pow(x, 3);
    }
  });
  if (cubed.includes(undefined)) {
    return undefined;
  } else {
    return cubed.filter((x) => Math.abs(x) % 2 == 1).reduce((x, y) => x + y, 0);
  }
};

// console.log(cubeOdd([1, 2, 3, 4])); // 28
// console.log(cubeOdd([-3, -2, 2, 3])); // 0
// console.log(cubeOdd(["a", 12, 9, "z", 42])); // undefined

// Minimum Steps (Array Series #6)
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// parameters array and number
// returns number
// examples
// pseudo code given an array sort it in ascending order, then using a for loop creater a variable to count the number of times the loop has run and a variable which will be added to, loop through the array and add each element to the empty one of the empty variables after it is equal to or larger than num return the number

const minimumSteps = (arr, num) => {
  const values = arr.sort((x, y) => x - y);
  for (let i = 0, sum = 0; i < values.length; i++) {
    sum += values[i];
    if (sum >= num) {
      return i;
    }
  }
};

// console.log(minimumSteps([4, 6, 3], 7)); // 1
// console.log(minimumSteps([10, 9, 9, 8], 17)); // 1
// console.log(minimumSteps([8, 9, 10, 4, 2], 23)); // 3
// console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); // 8
// console.log(minimumSteps([4, 6, 3], 2)); // 0
// console.log(minimumSteps([8, 9, 4, 2], 23)); // 3
