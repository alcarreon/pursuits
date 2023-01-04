// The most common letter

// Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

// If such letters are two or more, choose the one that appears in the string( earlier.

// For example:

// ('my mom loves me as never did', 't') => 'ty tot loves te as never did'
// ('real talk bro', 'n') => 'neal talk bno'
// ('great job go ahead', 'k') => 'grekt job go khekd'

// parameters two strings
// return string
// examples
// pseudo code given the first string split it into each character removing spaces from the array, create a variable to hold the count of each character in the string, use object.entries to convert the object into an array and sort the array based on the number of times that it appears, create an array of just the characters that appear the most, sort the array in case there are more than one characters with the same number of occurences, use replaceall on the original string to replace the character with the second provided string

const replaceCommon = (str, strReplace) => {
  let strArr = str.split("").filter((x) => x != " ");

  const countedNames = strArr.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currCount + 1,
    };
  }, {});
  let sortedChar = Object.entries(countedNames).sort((x, y) => y[1] - x[1]);
  let topChars = sortedChar.filter((x) => x[1] == sortedChar[0][1]);
  topChars.sort((x, y) => {
    if (strArr.indexOf(x) < strArr.indexOf(y)) {
      return -1;
    }
    if (strArr.indexOf(x) > strArr.indexOf(y)) {
      return 1;
    }
    return 0;
  });

  return str.replaceAll(topChars[0][0], strReplace);
};

console.log(replaceCommon("my mom loves me as never did", "t")); // 'ty tot loves te as never did'

console.log(replaceCommon("real talk bro", "n")); // 'neal talk bno'

// console.log(replaceCommon("great job go ahead", "k")); // 'grekt job go khekd'

// console.log(replaceCommon("yyyaaa twwww ttt uuu ccca", "p")); // 'yyyppp twwww ttt uuu cccp'
