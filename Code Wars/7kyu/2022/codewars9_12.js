// List of Presents
// Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// _ NOTE: All numbers will be integers >= 0, and the array will never be empty. _

// parameters number, array
// return number
// examples
// pseudo code create an empty variable to hold the result, then create another variable to hold the sorted array in ascending order, use a for loop to iterate over the array and check to see if the slice of the array is smaller than the num, if it is add one to the empty variable return the previsously empty variable

const howManyGifts = (num, arr) => {
  let holder = 0;
  const sortedArr = arr.sort((x, y) => x - y);
  for (let i = 1; i <= arr.length; i++) {
    if (sortedArr.slice(0, i).reduce((x, y) => x + y, 0) <= num) {
      holder += 1;
    }
  }
  return holder;
};

console.log(howManyGifts(20, [13, 2, 4, 6, 1])); // 4
// console.log(howManyGifts(0, [1])); // 0
console.log(howManyGifts(4, [1, 1, 1, 1]));
