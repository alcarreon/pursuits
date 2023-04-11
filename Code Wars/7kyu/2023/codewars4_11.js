// Responsible Drinking

// Welcome to the Codewars Bar!
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  -->  "1 glass of water"
// because you drank one standard drink

// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
// because you drank ten standard drinks
// Note:

// To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...

// parameters string
// return string
// examples
// pseudo code split the string by spaces, then use filter to get only the characters which are numbers, then use reduce to get the total number, check to see if the integer is one

function hydrate(str) {
  const splitStr = str.split(" ");
  let num = splitStr
    .filter((x) => x.toLowerCase() == x.toUpperCase())
    .reduce((x, y) => +x + +y);
  return num == 1 ? `${num} glass of water` : `${num} glasses of water`;
}

console.log(hydrate("1 beer")); // "1 glass of water"

console.log(hydrate("2 glasses of wine and 1 shot")); // "3 glasses of water"

console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")); // "10 glasses of water"
