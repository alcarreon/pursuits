// Merge two arrays
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// parameters two arrays
// returns array
// examples
// pseudo code determine which array is bigger then using a for loop check to see that i is less than the length of the smallest array and add it into an empty array otherwise only continue to add the array that is longer

const mergeArrays = (arr1, arr2) => {
  let starter = [];
  if (arr1.length - 1 <= arr2.length - 1) {
    for (let i = 0; i <= arr2.length - 1; i++) {
      if (i <= arr1.length - 1) {
        starter.push(arr1[i]);
        starter.push(arr2[i]);
      } else {
        starter.push(arr2[i]);
      }
    }
  } else if (arr1.length - 1 >= arr2.length - 1) {
    for (let i = 0; i <= arr1.length - 1; i++) {
      if (i <= arr2.length - 1) {
        starter.push(arr1[i]);
        starter.push(arr2[i]);
      } else {
        starter.push(arr1[i]);
      }
    }
  } else if (arr1.length - 1 == arr2.length - 1) {
    for (let i = 0; i <= arr1.length; i++) {
      starter.push(arr1[i]);
      starter.push(arr2[i]);
    }
  }
  return starter;
};

// console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"])); // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
// console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])); // ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
// console.log(mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"])); // [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']
// console.log(
//   mergeArrays(
//     ["b", "r", "a", "u", "r", "s", "e", "q", "z"],
//     [2, 5, 8, 23, 67, 6]
//   )
// ); // ['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']

// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1

// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

// parameters array
// returns string
// examples
// pseudo code given an array map through it checking each element and updating an empty number variable then check to see what ranges the final number is inbetween to find the level of misery

const paul = (arr) => {
  let starter = 0;
  arr.map((x) => {
    if (x == "kata") {
      starter += 5;
    } else if (x == "Petes kata") {
      starter += 10;
    } else if (x == "life") {
      starter += 0;
    } else if (x == "eating") {
      starter += 1;
    }
  });
  if (starter < 40) {
    return "Super happy!";
  } else if (starter > 40 && starter <= 70) {
    return "Happy!";
  } else if (starter > 70 && starter <= 100) {
    return "Sad!";
  } else if (starter > 100) {
    return "Miserable!";
  }
};

console.log(paul(["life", "eating", "life"])); // 'Super happy!'
console.log(paul(["life", "Petes kata", "Petes kata", "Petes kata", "eating"])); // 'Supper happy!'
console.log(
  paul([
    "Petes kata",
    "Petes kata",
    "eating",
    "Petes kata",
    "Petes kata",
    "eating",
  ])
);
("Happy!");
