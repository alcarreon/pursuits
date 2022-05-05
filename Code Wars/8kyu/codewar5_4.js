// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

let betterThanAverage = (arr, score) => {
  return (arr.reduce((x, y) => x + y, 0) + score) / (arr.length + 1) < score;
};

// console.log(betterThanAverage([2, 3], 75)); // true
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); // true
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); // false
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)); // false
// console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)); // false

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

let lovefunc = (num1, num2) => {
  if (num1 % 2 === 0 && num2 % 2 === 1) {
    return true;
  } else if (num1 % 2 === 1 && num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(lovefunc(1, 4)); // true
console.log(lovefunc(2, 2)); // false
console.log(lovefunc(0, 1)); // true
console.log(lovefunc(0, 0)); // false
