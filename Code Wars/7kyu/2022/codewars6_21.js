// Product Of Maximums Of Array (Array Series #2)
// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Input >> Output Examples
// maxProduct ({4, 3, 5}, 2) ==>  return (20)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
// maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
// Explanation:
// Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 8 * 9 * 10 = 720 .
// maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
// Explanation:
// Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600 .
// maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
// Explanation:
// Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is -4 * -1 = 4 .

// parameters array and number
// returns number
// examples
// pseudo code start by sorting the array in descending order, then use slice to get the indexes between 0 and num, then reduce the array by multiplying each element

const maxProduct = (arr, num) =>
  arr
    .sort((x, y) => y - x)
    .slice(0, num)
    .reduce((x, y) => x * y, 1);

// console.log(maxProduct([4, 3, 5], 2)); // 20
// console.log(maxProduct([10, 8, 7, 9], 3)); // 720
// console.log(maxProduct([8, 6, 4, 6], 3)); // 288
// console.log(maxProduct([10, 2, 3, 8, 1, 10, 4], 5)); // 9600
// console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)); // 247895375

// Array Leaders (Array Series #3)
// Definition
// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

// Input >> Output Examples
// arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
// Explanation:
// 4 is greater than the sum all the elements to its right side

// Note : The last element 0 is equal to right sum of its elements (abstract zero).

// arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
// Explanation:
// 17 is greater than the sum all the elements to its right side

// 5 is greater than the sum all the elements to its right side

// Note : The last element 2 is greater than the sum of its right elements (abstract zero).

// arrayLeaders ({5, 2, -1}) ==> return {5, 2}
// Explanation:
// 5 is greater than the sum all the elements to its right side

// 2 is greater than the sum all the elements to its right side

// Note : The last element -1 is less than the sum of its right elements (abstract zero).

// parameters array
// results array
// examples
// pseudo code given an array create a new empty array to hold values, then loop through the original array, and check to see if the index is at 0 then get the rest of the array and check to see if the element at index 0 is greater than the sum of the rest of the elements to the right of it if it is push the element into an empty array, then as long as i is less than the length of the array - 1 check that element of the array with the product of the rest of the elements and push them to the empty array, finally check to see if we are at the the end of the array and check if the last element is greater than 0

const arrayLeaders = (arr) => {
  let starter = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i == 0 && arr[i] > arr.slice(1).reduce((x, y) => x + y)) {
      starter.push(arr[i]);
    } else if (
      i < arr.length - 1 &&
      arr[i] > arr.slice(i + 1).reduce((x, y) => x + y)
    ) {
      starter.push(arr[i]);
    } else if (i == arr.length - 1 && arr[i] > 0) {
      starter.push(arr[i]);
    }
  }
  return starter;
};

// console.log(arrayLeaders([5, 2, -1])); // [5,2]
// console.log(arrayLeaders([1, 2, 3, 4, 0])); // [4]
// console.log(arrayLeaders([16, 17, 4, 3, 5, 2])); // [17,5,2]
// console.log(arrayLeaders([-1, -29, -26, -2])); // [-1]
// console.log(arrayLeaders([5, -2, 2])); // [5,2]
