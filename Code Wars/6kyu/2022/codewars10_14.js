// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// parameters string
// return string
// examples
// psuedo code given a string split it by each character, and create a variable to hold the result, iterate through the split string checcking to see if the current element is upper case if it is add it to the previously defined variable

const solution = (str) => {
  let splitStr = str.split("");
  let holder = "";
  splitStr.forEach((x, y) =>
    x.toUpperCase() == splitStr[y] ? (holder += ` ${x}`) : (holder += x)
  );
  return holder;
};

// console.log(solution("camelCasing")); // 'camel Casing'

// console.log(solution("camelCasingTest")); // 'camel Casing Test'
