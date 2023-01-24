// Smallest unused ID

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// parameters array
// return integer
// examples
// pseudo code create a variable with all duplicates removed from the array and sorted in ascending order, create another variable to hold all the numbers that should be in the array, use filter to find the elements that don't match take the first one as that is the one that is mising

function nextId(arr) {
  let sortedArr = [...new Set(arr)].sort((x, y) => x - y);
  let wholeArr = [];
  for (let i = 0; i <= sortedArr.length; i++) {
    wholeArr.push(i);
  }
  return wholeArr.filter((x, y) => x != sortedArr[y])[0];
}

console.log(nextId([0, 1, 2, 3, 5])); // 4

console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11

console.log(nextId([1, 2, 0, 2, 3, 5])); // 4
