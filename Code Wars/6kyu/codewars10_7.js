// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// parameters string
// return string
// examples
// pseudo code given a string create a variable to hold the result of finding the number in the string, in the created variable split the string by each character, and then find the first character that is an integer and return it, use this inside a sort on the original string to sort the string numerically

const order = (str) => {
  const numerator = (s) => s.split("").find((x) => Number.isInteger(+x));
  return str
    .split(" ")
    .sort((x, y) => {
      return numerator(x) - numerator(y);
    })
    .join(" ");
};

// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"

// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"

// console.log(order("")); // ""
