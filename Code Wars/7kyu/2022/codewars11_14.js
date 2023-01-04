// Split In Parts

// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

// parameters string, number
// return string
// examples
// pseudo code creat an empty variable to hold the result as a string, then use a for loop to iterate over the string check to see if the iterator is divisable by the number provided or if it is equal to 0 if it is add the character to the string otherwise add a space and then add the character

const splitInParts = (str, leng) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % leng || i === 0) {
      result += str[i];
    } else {
      result += ` ${str[i]}`;
    }
  }
  return result;
};

// console.log(splitInParts("supercalifragilisticexpialidocious", 3)); // 'sup erc ali fra gil ist ice xpi ali doc iou s'

// console.log(splitInParts("HelloKata", 1)); // "H e l l o K a t a"

// console.log(splitInParts("HelloKata", 9)); // "HelloKata"
