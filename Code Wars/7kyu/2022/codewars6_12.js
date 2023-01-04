// Clean up after your dog

// You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.

// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

// If you do, return 'Clean', else return 'Cr@p'.

// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'

// parameters array, number , number
// returns string
// examples
// pseudo code to find how much space we have to pick up multiply bags times cap, then to see how much crap there is flatten the array and and check each element to see if it is @, then do the same thing but looking for dog, use a conditional to always say dog if there is one, otherwise check to depending on whether the array is bigger than the total space return a string

const crap = (x, bags, cap) => {
  totalHold = bags * cap;
  flattened = [].concat(...x);
  totalCrap = flattened.filter((x) => x == "@").length;
  dog = flattened.filter((x) => x == "D").length;
  if (dog >= 1) {
    return "Dog!!";
  } else if (totalHold < totalCrap) {
    return "Cr@p";
  } else if (totalHold > totalCrap) {
    return "Clean";
  }
};

// for crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2) (first one to try)
// x = ["_", "_", "_", "_"],
//   ["_", "_", "_", "@"],
//   ["_", "_", "@", "_"],
// bags =  2 number of bags
// cap = 2 how much each bag can hold

// console.log(
//   crap(
//     [
//       ["_", "_", "_", "_"],
//       ["_", "_", "_", "@"],
//       ["_", "_", "@", "_"],
//     ],
//     2,
//     2
//   )
// ); // "Clean"
// console.log(
//   crap(
//     [
//       ["_", "_", "_", "_"],
//       ["_", "_", "_", "@"],
//       ["_", "_", "@", "_"],
//     ],
//     1,
//     1
//   )
// ); //"Cr@p"
// console.log(
//   crap(
//     [
//       ["_", "_"],
//       ["_", "@"],
//       ["D", "_"],
//     ],
//     2,
//     2
//   )
// ); // 'Dog!!'

// We Have Liftoff

// You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

// Between each number should be a space and after the final number (n) should be the word 'liftoff!'

// parameters array
// returns string
// examples
// pseudo code given an array of numbers sort it in descending order, then for each element besides the last element add a space, at the last element add liftoff! and then join the array back into a string

const liftoff = (arr) => {
  sortedArr = arr
    .sort((x, y) => y - x)
    .map((x, y) => {
      if (y <= arr.length - 2) {
        return `${x} `;
      } else {
        return `${x} liftoff!`;
      }
    });
  return sortedArr.join("");
};

console.log(liftoff([2, 8, 10, 9, 1, 3, 4, 7, 6, 5])); // "10 9 8 7 6 5 4 3 2 1 liftoff!"
