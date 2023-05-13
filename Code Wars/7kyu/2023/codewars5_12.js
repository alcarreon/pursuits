// The Span Function

// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

// For example,

// function isEven (x) {
//   return Math.abs(x) % 2 === 0;
// }

// var arr = [2,4,6,1,8,10];

// // This is true
// span(arr, isEven) === [[2,4,6],[1,8,10]]
// Your task is to...wait for it... write your own span function !!!
var arr1 = [2, 4, 6, 1, 4, 8];
var arr2 = [1, 4, 5, 7, 6];
var arr3 = [13, 17, 19, 11, 21];

function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

// parameters array function
// return array
// examples
// pseudo code create an array for elements that pass the function and an array for elements that don't, iterate over the array and if they satisfy the test push them to the true array, when it fails take the rest of the array and add it to the false array, return both of them and use flat on the false array

function span(arr, func) {
  let trueArr = [];
  let falseArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr.slice(i));
      break;
    }
  }
  return [trueArr, falseArr.flat()];
}

console.log(span(arr1, isEven)); // [[2,4,6], [1,4,8]]

console.log(span(arr2, isEven)); // [[], [1, 4, 5, 7, 6]]

console.log(span(arr3, isOdd)); // [[13, 17, 19, 11, 21], []]
