// UEFA EURO 2016

// Finish the uefaEuro2016() function so it return string just like in the examples below:

// parameters two arrays
// returns string
// examples
// pseudo code given two arrays check to see if element one is bigger than, less than, or equal to element two in the array holding the score and use the array holding the teams in a string literal to display the result

const uefaEuro2016 = (teams, arr) => {
  if (arr[0] == arr[1]) {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  } else if (arr[0] < arr[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  }
};

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0])); // "At match Germany - Ukraine, Germany won!"

console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2])); // "At match Belgium - Italy, Italy won!"

console.log(uefaEuro2016(["Portugal", "Iceland"], [1, 1])); // "At match Portugal - Iceland, teams played draw."
