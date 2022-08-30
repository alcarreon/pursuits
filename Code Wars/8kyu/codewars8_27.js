// Vowel remover
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// parameters string
// return string
// examples
// pseudo code create an string variable holding all the vowels, create an empty variable to hold the result, iterate through the string and check to see if the character is not a vowel if it is not add it to the empty string
const shortcut = (str) => {
  const vowels = "aeiou";
  let holder = "";
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i])) {
      holder += str[i];
    }
  }
  return holder;
};

console.log(shortcut("hello")); // 'hll'
console.log(shortcut("how are you today?")); // 'hw r y tdy?'
console.log(shortcut("complain")); // 'cmpln'
console.log(shortcut("never")); // 'nvr'
