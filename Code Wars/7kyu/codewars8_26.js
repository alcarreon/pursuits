// Reversed Words

const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWords("hello world!")); // "world! hello"
console.log(
  reverseWords("The greatest victory is that which requires no battle")
); // "battle no requires which that is victory greatest The"
