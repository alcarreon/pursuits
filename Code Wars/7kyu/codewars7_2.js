// Counting in the Amazon

// The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

// parameters number
// returns string
// examples
// pseudo code given a number check to see if it is between 0 and 2 then create a string based on the number use recurssion to continue to run the program until the number is euqal to 0

const countArara = (num) => {
  if (num == 0) {
    return "";
  } else if (num == 1) {
    return "anane";
  } else if (num == 2) {
    return "adak";
  } else {
    return "adak " + countArara(num - 2);
  }
};

console.log(countArara(1)); // "anane"
console.log(countArara(3)); // "adak anane"
console.log(countArara(8)); // "adak adak adak adak"
