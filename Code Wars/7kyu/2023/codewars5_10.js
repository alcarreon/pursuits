// Sorting Arrays

// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

var a1 = ["giraffe", "orangutan", "impala", "elephant", "rhino"];
var a2 = ["rattlesnake", "eagle", "geko", "iguana", "octopus"];

var a3 = ["jellyfish", "koi", "caribou", "owl", "dolphin"];
var a4 = ["ostrich", "jaguar", "deer", "camel", "kangaroo"];

var a5 = ["newt", "lizard", "snail", "tapir", "rabbit"];
var a6 = ["tortoise", "narwhal", "llama", "raven", "sloth"];

// parameters two arrays
// return array
// examples
// pseudo code create a variable to hold an empty array, then iterate over the first array using a map, use a for loop to check whether the first letter is equal to the first letter of elements from the second array if they are push the element to the empty array

function sortArray(arr1, arr2) {
  let holder = [];
  arr1.map((x, y) => {
    for (let i = 0; i < arr1.length; i++) {
      if (x[0] == arr2[i][0]) {
        holder.push(arr2[i]);
      }
    }
  });
  return holder;
}

console.log(sortArray(a1, a2)); // ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

// console.log(sortArray(a3, a4)); // ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']

// console.log(sortArray(a5, a6)); // ['narwhal', 'llama', 'sloth', 'tortoise', 'raven']
