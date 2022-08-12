// Hells Kitchen
// Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

// Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

// Rules:

// Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

// parameters string
// returns string
// examples
// pseudo code given a string create two variables one to contain vowels another that is an empty string, loop through the string and check to see what conditions the string matches add the !!! to the end of each string

const gordon = (str) => {
  const vowels = "AEIOU";
  let result = "";

  for (let char of str) {
    if (vowels.includes(char.toUpperCase()) && char.toUpperCase() === "A") {
      result += "@";
    } else if (vowels.includes(char.toUpperCase())) {
      result += "*";
    } else if (char === " ") {
      result += "!!!! ";
    } else {
      result += char.toUpperCase();
    }
  }

  result += "!!!!";

  return result;
};

console.log(gordon("What feck damn cake")); // 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'

// console.log(gordon("are you stu pid")); // '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'

// console.log(gordon("i am a chef")); // '*!!!! @M!!!! @!!!! CH*F!!!!'
