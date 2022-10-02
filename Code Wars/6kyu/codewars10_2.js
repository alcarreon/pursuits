// Interview Question (easy)
// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

// parameters string
// return string
// examples
// pseudo code given a string lowercase all characters split it by each character and remove spaces from the array using filter, create a new varaible to hold the final result, use reduce to get a count of all characters, use object.entries to get an array of the object, iterate through the object and check to see that the current index is not equal to the end of the array, if it is not add the letter followed by using repeat to get the number of * necessary, if y is at the end of the array do not include a comma at the end of the *

const getStrings = (str) => {
  let holder = "";
  let splitStr = str
    .toLowerCase()
    .split("")
    .filter((x) => x != " ");
  const countedChar = splitStr.reduce((allNames, name) => {
    const currCount = allNames[name] ?? 0;
    return {
      ...allNames,
      [name]: currCount + 1,
    };
  }, {});
  let counts = Object.entries(countedChar);
  counts.map((x, y) => {
    // console.log(y);
    if (y < counts.length - 1) {
      holder += `${x[0]}:${"*".repeat(x[1])},`;
    } else {
      holder += `${x[0]}:${"*".repeat(x[1])}`;
    }
  });

  //   console.log(holder);
  return holder;
};

// console.log(getStrings("Chicago")); // "c:**,h:*,i:*,a:*,g:*,o:*"

// console.log(getStrings("Bangkok")); // "b:*,a:*,n:*,g:*,k:**,o:*"

// console.log(getStrings("Las Vegas")); // "l:*,a:**,s:**,v:*,e:*,g:*"
