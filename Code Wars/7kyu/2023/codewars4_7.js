// sPoNgEbOb MeMe

// Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

// "Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

// parameters string
// return string
// examples
// pseudo code create an empty variable to hold the result, iterate over the string and check to see if the index is even if it is uppercase the character, otherwise lowercase the character

function spongeMeme(str) {
  return str
    .split("")
    .map((x, y) => (y % 2 == 0 ? x.toUpperCase() : x.toLowerCase()))
    .join("");
}

console.log(spongeMeme("stop Making spongebob Memes!")); // "StOp mAkInG SpOnGeBoB MeMeS!"
