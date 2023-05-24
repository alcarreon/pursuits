// Decreasing Inputs

// This kata is all about adding numbers.

// You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

// Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.

//   add(3,4,6);
//   /*
//   returns ( 3 / 1 ) + ( 4 / 2 ) + ( 6 / 3 ) = 7
//   */
// Remember the function will return 0 if no arguments are passed and it must round the result if sum is a float.

// Example

//   add(); //=> 0
//   add(1,2,3); //=> 3
//   add(1,4,-6,20); //=> 6

// parameters integers
// return integer
// examples
// pseudo code check to see if there are no arguments otherwise iterate over the integers and divide the element by the index plus one reduce the array and use round to get the final result

function add(...nums) {
  return nums.length == 0
    ? 0
    : Math.round(nums.map((x, y) => x / (y + 1)).reduce((x, y) => x + y));
}

console.log(add()); // 0

console.log(add(100, 200, 300)); // 300

console.log(add(2)); // 2

console.log(add(4, -3, -2)); // 2

console.log(add(-1, -2, -3, -4)); // -4
