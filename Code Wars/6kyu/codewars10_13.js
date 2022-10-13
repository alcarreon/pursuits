// Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// parameters string
// return array
// examples
// psuedo code split the string by each character, iterate over the array and check that the next index is not equal to the previous one

const uniqueInOrder = (str) => {
  if (typeof str == "string") {
    let splitStr = str.split("");
    return splitStr.filter((x, y) => {
      if (y < splitStr.length && x != splitStr[y + 1]) {
        return x;
      }
    });
  } else {
    return str.filter((x, y) => {
      if (y < str.length && x != str[y + 1]) {
        return x;
      }
    });
  }
};

// console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A','B','C','D','A','B']
// console.log(uniqueInOrder([1, 2, 3, 3]));
