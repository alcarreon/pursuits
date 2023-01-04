// Multiply Word in String

// You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

// parameters string, number, number
// return string
// examples
// psuedo code create an empty variable to hold the new string, split the string by spaces and create a new variable to hold the element from the string we will be using, use a for loop to iterate number of times provided and check to see if the incrementor is at the last number not adding a - at the end

const modifyMultiply = (str, strVal, repeat) => {
  let holder = "";
  const strHolder = str.split(" ");
  const strElement = strHolder[strVal];
  if (strHolder.length === 1) {
    holder += strElement;
  } else {
    for (let i = 1; i <= repeat; i++) {
      if (i === repeat) {
        holder += strElement;
      } else {
        holder += `${strElement}-`;
      }
    }
  }
  return holder;
};

console.log(modifyMultiply("This is a string", 3, 5)); // "string-string-string-string-string"

// console.log(
//   modifyMultiply(
//     "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
//     8,
//     10
//   )
// ); // "that-that-that-that-that-that-that-that-that-that"

// console.log(
//   modifyMultiply(
//     "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",
//     1,
//     1
//   )
// ); // "means"

// console.log(
//   modifyMultiply(
//     "Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",
//     6,
//     8
//   )
// ); // "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance"

// console.log(
//   modifyMultiply(
//     "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
//     2,
//     5
//   )
// ); // "around-around-around-around-around"
