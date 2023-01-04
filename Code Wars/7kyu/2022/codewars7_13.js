// Holiday III - Fire on the boat

// Enjoying your holiday, you head out on a scuba diving trip!

// Disaster!! The boat has caught fire!!

// You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

// Go to work!

// parameters string
// returns string
// examples
// psuedo code given a string split it by spaces into an array, then map through the array checking each element to see if it is equal to 'Fire' and replace it otherwise retun the original element finally join the list back together into a string

const fireFight = (str) =>
  str
    .split(" ")
    .map((x) => (x == "Fire" ? "~~" : x))
    .join(" ");

// console.log(
//   fireFight(
//     "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
//   )
// ); // "Boat Rudder Mast Boat Hull Water ~~ Boat Deck Hull ~~ Propeller Deck ~~ Deck Boat Mast"

// console.log(fireFight("Mast Deck Engine Water Fire")); // "Mast Deck Engine Water ~~"

// console.log(
//   fireFight(
//     "Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain"
//   )
// ); // "~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain"

// Batman Quotes

// Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

// Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

// Return the quote along with the character who said it:

// getQuote(["I am vengeance. I am the night. I am Batman!", "Holy haberdashery, Batman!", "Let's put a smile on that faaaceee!"], "Rob1n")
//   // =>  "Robin: Holy haberdashery, Batman!
// Hint: You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker".

// parameters array, string
// returns string
// examples
// pseudo code given a string check the first element to see whether it will be batman, robin, or the jocker, then split the string to find the number and use it to access the quotes array and use string literal notation to make the final string

quotes = [
  "WHERE IS SHE?!",
  "Holy haberdashery, Batman!",
  "Let's put a smile on that faaaceee!",
];

const getQuote = (quotes, str) => {
  if (str[0] == "B") {
    return `Batman: ${quotes[+str.split("").filter((x) => !isNaN(x))]}`;
  } else if (str[0] == "R") {
    return `Robin: ${quotes[+str.split("").filter((x) => !isNaN(x))]}`;
  } else if (str[0] == "J") {
    return `Joker: ${quotes[+str.split("").filter((x) => !isNaN(x))]}`;
  }
};

console.log(getQuote(quotes, "Rob1n")); // "Robin: Holy haberdashery, Batman!"
console.log(getQuote(quotes, "Joke2")); // "Joker: Let's put a smile on that faaaceee!"
console.log(getQuote(quotes, "Batm0n")); // "Batman: WHERE IS SHE?!"
