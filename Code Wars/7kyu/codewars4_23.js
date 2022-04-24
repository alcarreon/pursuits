// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

// console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
// console.log(
//   disemvowel("No offense but,\nYour writing is among the worst I've ever read")
// ); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// let solution = (str1, str2) => {
//   let secondLength = str2.length;
//   //   return secondLength;
//   if (str1.slice(-secondLength) == str2) {
//     return true;
//   } else if(str2 == ''){
//       return true
//   }
//   else {
//     return false;
//   }
// };

// console.log(solution("abcde", "cde")); // true
// console.log(solution("abcde", "abc")); // false
// console.log(solution('abc', '')); // true

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

let oddOrEven = (arr) => {
  let total = arr.reduce((x, y) => x + y, 0);
  if (total % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

// console.log(oddOrEven([0])) // 'even'
// console.log(oddOrEven([1])); // 'odd'
// console.log(oddOrEven([])); // 'even'
// console.log(oddOrEven([0, 1, 5])); // 'even'
// console.log(oddOrEven([0, 1, 3])); // 'even'
// console.log(oddOrEven([1023, 1, 2])); // 'even'
// console.log(oddOrEven([0, 1, 2])); // 'odd'

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

let solution = (arr) => {
  if (arr == null) {
    return [];
  } else {
    return arr.sort((a, b) => a - b);
  }
};

console.log(solution([1, 2, 3, 10, 5])); // [1,2,3,5,10]
console.log(solution(null)); // []
console.log(solution([])); // []
console.log(solution([20, 2, 10])); // [2,10,20]
console.log(solution([2, 20, 10])); // [2,10,20]
