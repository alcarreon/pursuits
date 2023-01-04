// Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// parameters string
// return number
// examples
// pseudo code given a string split it by each character, then create another variable to hold the count of each charcter in the string, use reduce to obtain the count, then convert the object into an array using entries, and finally filter the array by the second element in each sub array making sure that the number is larger than 1 if it is add it to the array and finaly take the length of the filtered array to see how many characters repeated

const duplicateCount = (str) => {
  let splitStr = str.toLowerCase().split("");

  var countedChars = splitStr.reduce(function (obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});

  let multiChars = Object.entries(countedChars);

  return multiChars.filter((x) => x[1] > 1).length;
};

// console.log(duplicateCount("")); // 0

// console.log(duplicateCount("abcde")); // 0

// console.log(duplicateCount("aabbcde")); // 2

// console.log(duplicateCount("aabBcde")); // 2

// console.log(duplicateCount("Indivisibility")); // 1

// console.log(duplicateCount("Indivisibilities")); // 2
