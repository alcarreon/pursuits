// Reverse every other word in the string

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

// parameters string
// return
// examples string
// pseudo code create a variable to split the string by spaces, and create another variable as an empty string to hold the result, iterate through the split string and check to see if the current index is even if it is add the word to the empty string variable, otherwise if the index is false, split the string again by each character, reverse the array and join it back together, add that reversed string to the variable holding the result, finally return the variable holding the final string

const reverse = (str) => {
  let splitStr = str.split(" ");
  let holder = "";
  splitStr.map((x, y) => {
    if (y % 2 == 0) {
      holder += `${x} `;
    } else if (y % 2 == 1) {
      holder += `${x.split("").reverse().join("")} `;
    }
  });

  return holder.trim();
};

// console.log(reverse("Reverse this string, please!")); // "Reverse siht string, !esaelp"

// console.log(reverse("I really don't like reversing strings!")); // "I yllaer don't ekil reversing !sgnirts"

// console.log(reverse("Did it work?"));
