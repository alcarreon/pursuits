// The Office VI - Sabbatical

// Learning to code around your full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.

// Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!

// To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

// You need to approach your boss. Her decision will be based on three parameters:

// val = your value to the organisation
// happiness = her happiness level at the time of asking and finally
// The numbers of letters from 'sabbatical' that are present in string s.

// Note that if s contains three instances of the letter 'l', that still scores three points, even though there is only one in the word sabbatical.

// If the sum of the three parameters (as described above) is > 22, return 'Sabbatical! Boom!', else return 'Back to your desk, boy.'.

// parameters strin, number, number
// returns string
// examples
// pseudo code create an variable to hold the total number of letters from the string that are in 'sabbatical' and a variable with the string 'sabbatical' then split the string argument by spaces and compare each element to see if it is in the string 'sabbatical' if it is add one to the holding the count of letters then check to see if the count of letters plus val plus happy are greater than 22

const sabb = (str, val, happy) => {
  let starter = 0;
  let letters = "sabbatical";
  str.split("").forEach((el) => {
    if (letters.includes(el)) {
      starter += 1;
    }
  });
  return starter + val + happy > 22
    ? "Sabbatical! Boom!"
    : "Back to your desk, boy.";
};

// console.log(sabb("Can I have a sabbatical?", 5, 5)); // 'Sabbatical! Boom!'
// console.log(sabb("Why are you shouting?", 7, 2)); // 'Back to your desk, boy.'
// console.log(sabb("What do you mean I cant learn to code??", 8, 9)); // 'Sabbatical! Boom!'
// console.log(sabb("Please calm down", 9, 1)); // 'Back to your desk, boy.'

// Find all non-consecutive numbers

// Your task is to find all the elements of an array that are non consecutive.

// A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

// Create a function named allNonConsecutive

// E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

// E.g., for the above array the result should be:

// [
//   {i: 4, n:6},
//   {i: 7, n:15}
// ]
// If the whole array is consecutive or has one element then return an empty array.

// The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive and the gap could be larger than one.

// parameters array
// returns array
// examples
// pseudo code create an empty array that will hold the objects, iterate through the lest checking to see that we stop at the second to last element, and that the current element + 1 is equal to the next element if it is create an object and push it to the empty array

const allNonConsecutive = (arr) => {
  let starter = [];
  arr.forEach((x, y) => {
    if (y < arr.length - 1 && x + 1 != arr[y + 1]) {
      starter.push({ i: y + 1, n: arr[y + 1] });
    }
  });
  return starter;
};

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 15, 16]));
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
// [{i: 4, n:6}, {i: 7, n:10}]
