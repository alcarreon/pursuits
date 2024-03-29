// Consecutive Vowels in a String

// Consecutive Vowels
// You are given a random string of lower-case letters. Your job is to find out how many ordered and consecutive vowels there are in the given string beginning from 'a'. Keep in mind that the consecutive vowel to 'u' is 'a' and the cycle continues.

// Return an integer with the length of the consecutive vowels found.

// This is better explained with a couple of examples:

// You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
// This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
// Note
// For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

// Good luck!

// parameters string
// return number
// examples
// pseudo code given a string split it by each character, then create a variable to hold an array of vowels, check to see if the current character matches the first element of the vowels, if it does incriment it by one until it is greater than 5 then use modulus to access the elements of the array

const getTheVowels = (str) => {
  let holder = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let splitStr = str.split("");

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] == vowels[holder] && holder <= 5) {
      holder += 1;
    } else if (splitStr[i] == vowels[holder % 5]) {
      holder += 1;
    }
  }
  return holder;
};

// console.log(getTheVowels("agrtertyfikfmroyrntbvsukldkfa")); // 6

// console.log(getTheVowels("akfheujfkgiaaaofmmfkdfuaiiie")); // 7

// console.log(getTheVowels("eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou")); // 0

// console.log(
//   getTheVowels(
//     "desrehakkjfuteknvfiyrtfbehjdjrobchrunbcbbhdhehbvudjsnanbakkjndhfjenfndinmfnbfondndendnfudnfnanndhdemdmcnfdemnfjimdfofnmfnfjanmdnhdua"
//   )
// ); // 16

// console.log(
//   getTheVowels(
//     "sudnfhrakekdhhfkakjdjdhvneidkvnudntomcnnamjemdmfudkfhjamvcjedkfdnridnmnbvfhbdjdidncbvchencchdjdodncvchfndnrnencncnffduncbhjdfja"
//   )
// ); // 11

// console.log(
//   getTheVowels(
//     "jurjfdleiifjriisiouajjfyhekkfjvnnmsuimsnvyuhvcodnmfnsumvbjshhsadkvhfeixoua"
//   )
// ); // 11
