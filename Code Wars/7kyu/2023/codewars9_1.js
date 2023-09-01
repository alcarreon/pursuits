// Match My Husband

// It is 2050 and romance has long gone, relationships exist solely for practicality.

// MatchMyHusband is a website that matches busy working women with perfect house husbands. You have been employed by MatchMyHusband to write a function that determines who matches!!

// The rules are... a match occurs providing the husband's "usefulness" rating is greater than or equal to the woman's "needs".

// The husband's "usefulness" is the SUM of his cooking, cleaning and childcare abilities and takes the form of an array .

// usefulness example --> [15, 26, 19]   (15 + 26 + 19) = 60

// Every woman that signs up, begins with a "needs" rating of 100. However, it's realised that the longer women wait for their husbands, the more dissatisfied they become with our service. They also become less picky, therefore their needs are subject to exponential decay of 15% per month. https://en.wikipedia.org/wiki/Exponential_decay

// Given the number of months since sign up, write a function that returns "Match!" if the husband is useful enough, or "No match!" if he's not.

// parameters array and integer
// return string
// examples
// pseudo code use reduce on the array to get the total usefullness of each husband, then use the exponential decay formula to find the value that a woman is at compare the two

function match(useful, months) {
  const totalUseful = useful.reduce((a, b) => a + b);
  const decay = 100 * (1 - 0.15) ** months;
  return totalUseful < decay ? "No match!" : "Match!";
}

console.log(match([15, 24, 12], 4)); // "No match!"

console.log(match([26, 23, 19], 3)); // "Match!"

console.log(match([34, 25, 36], 1)); // "Match!"