// The Baby Years I - Baby Counting

// You've had a baby.

// Well done. Nice isn't it? Life destroying... but in a good way.

// Part of your new routine is lying awake at night worrying that you've either lost the baby... or that you have more than 1!

// Given a string of words (x), you need to calculate how many babies are in it. To count as a baby you must have all of the letters in baby ('b', 'a', 'b', 'y'). That counts as 1. They do not need to be in order in the string. Upper and lower case letters count.

// Examples:

// "baby" = 1
// "abby" = 1
// "babybaby" = 2
// "Why the hell are there so many babies?!" = 1
// "Anyone remember life before babies?" = 1
// "Happy babies boom ba by?" = 2
// If there are no babies in the string - you lost the baby!! Return a different value, as shown below:

// 'none here' = "Where's the baby?!" '' = "Where's the baby?!"

const babyCount = (str) => {
  let result = 0;
  let splitStr = str.toLowerCase().split(" ").join("").split("");
  //   console.log(splitStr);
  const countedChar = splitStr.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currCount + 1,
    };
  }, {});

  let counts = Object.entries(countedChar);
  let filteredCounts = counts
    .filter((x) => x[0] == "b" || x[0] == "a" || x[0] == "y")
    .sort((x, y) => x[0].localeCompare(y[0]));

  if (filteredCounts.length != 3) {
    return "Where's the baby?!";
  } else if (filteredCounts[1][1] >= 2) {
    if (
      filteredCounts[1][1] / 2 ==
      Math.min(filteredCounts[0][1], filteredCounts[2][1])
    ) {
      result += Math.floor(filteredCounts[1][1] / 2);
    } else if (
      Math.min(filteredCounts[0][1], filteredCounts[2][1]) >=
      filteredCounts[1][1] / 2
    ) {
      result += Math.floor(filteredCounts[1][1] / 2);
    } else {
      result += Math.min(filteredCounts[0][1], filteredCounts[2][1]);
    }
  } else {
    return "Where's the baby?!";
  }

  return result;
};

// console.log(babyCount("baby")); // 1

// console.log(babyCount("abby")); // 1

// console.log(babyCount("baby baby baby")); // 3

// console.log(babyCount("Why the hell are there so many babies?!")); // 1

console.log(babyCount("Anyone remember life before babies?")); // 1

console.log(babyCount("Happy babies boom ba by?")); // 2

// console.log(babyCount("b a b y")); // 1

// console.log(babyCount("")); // 'Where\'s the baby?!'

// console.log(babyCount("none here")); // 'Where\'s the baby?!'
