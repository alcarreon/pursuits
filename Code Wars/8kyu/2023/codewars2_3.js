// Crash Override

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// parameters two strings
// return string
// examples
// pseudo code check to see that both the first characters of the strings are letters if they are then use a string template to get the name from the objects making sure to capatalize it otherwise return that it needs to be a letter

var firstName = { A: "Alpha", B: "Beta", C: "Cache" };
var surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };

function aliasGen(first, sur) {
  if (
    (first[0].toLowerCase() != first[0].toUpperCase()) == true &&
    sur[0].toLowerCase() != sur[0].toUpperCase()
  ) {
    return `${firstName[first[0].toUpperCase()]} ${
      surname[sur[0].toUpperCase()]
    }`;
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}

console.log(aliasGen("Albert", "Carreon")); // 'Data Pay

console.log(aliasGen("1aisy", "Petrovic")); // 'Data Pay

console.log(aliasGen("Daisy", "9etrovic")); // 'Data Pay
