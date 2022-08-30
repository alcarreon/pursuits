// Reversed Words

// parameters string
// return string
// examples
// pseudo code given a string split it by spaces and then use reverse on the array join the array back into a string

const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWords("hello world!")); // "world! hello"
console.log(
  reverseWords("The greatest victory is that which requires no battle")
); // "battle no requires which that is victory greatest The"
