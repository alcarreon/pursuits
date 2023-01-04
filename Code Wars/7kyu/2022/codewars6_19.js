// Drone Fly-By
// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

const flyBy = (lamps, drone) => {
  dronePosition = drone.indexOf("T");
  let starter = "";
  return lamps
    .split("")
    .map((x, y) => {
      if (y <= dronePosition) {
        return "o";
      } else {
        return "x";
      }
    })
    .join("");
};

// console.log(flyBy("xxxxxx", "====T")); // 'ooooox'
// console.log(flyBy("xxxxxxxxx", "==T")); // 'oooxxxxxx'
// console.log(flyBy("xxxxxxxxxxxxxxx", "=========T")); // 'ooooooooooxxxxx'

// Scoring Tests
// A new school year is approaching, which also means students will be taking tests.

// The tests in this kata are to be graded in different ways. A certain number of points will be given for each correct answer and a certain number of points will be deducted for each incorrect answer. For ommitted answers, points will either be awarded, deducted, or no points will be given at all.

// Return the number of points someone has scored on varying tests of different lengths.

// The given parameters will be:

// An array containing a series of 0s, 1s, and 2s, where 0 is a correct answer, 1 is an omitted answer, and 2 is an incorrect answer.
// The points awarded for correct answers
// The points awarded for ommitted answers (note that this may be negative)
// The points deducted for incorrect answers (hint: this value has to be subtracted)
// Note: The input will always be valid (an array and three numbers)

const scoreTest = (str, right, omit, wrong) => {
  let correct = 0;
  let omitted = 0;
  let incorrect = 0;
  str.forEach((x) => {
    if (x == 0) {
      correct += 1;
    } else if (x == 1) {
      omitted += 1;
    } else if (x == 2) {
      incorrect += 1;
    }
  });
  return correct * right + omitted * omit - incorrect * wrong;
};

console.log(scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1)); // 9
console.log(scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)); // 3
