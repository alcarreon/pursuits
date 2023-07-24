// Consecutive strings

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

// Note
// consecutive strings : follow one after another without an interruption

// parameters array and integer
// return string
// examples
// pseudo code check to see that k is not negative or 0 or that it is greater than the length of the array, otherwise iterate through the array with a map and use slice to get the portion of the array needed join it back into a string and then get the length of the string, sort the array in desecnding order and return the first element

function longestConsec(arr, k) {
  if (k > arr.length || k <= 0) {
    return "";
  } else {
    const lengths = arr.map((x, y) => {
      return [
        arr.slice(y, y + k).join(""),
        arr.slice(y, y + k).join("").length,
      ];
    });
    return lengths.sort((x, y) => y[1] - x[1])[0][0];
  }
}

// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //"ixoyx3452zzzzzzzzzzzz"

// console.log(
//   longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2)
// ); // "folingtrashy"

// console.log(
//   longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
// ); // "abigailtheta"

console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); // "oocccffuucccjjjkkkjyyyeehh"

// console.log(longestConsec([], 3)); // ""

// console.log(
//   longestConsec(
//     [
//       "itvayloxrp",
//       "wkppqsztdkmvcuwvereiupccauycnjutlv",
//       "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
//     ],
//     2
//   )
// ); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"

// console.log(
//   longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
// ); // "wlwsasphmxxowiaxujylentrklctozmymu"

// console.log(
//   longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
// ); // ""

// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"

// console.log(
//   longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
// ); // ""

// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0));
// ("");
