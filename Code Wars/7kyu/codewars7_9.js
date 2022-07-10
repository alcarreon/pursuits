// Insert dashes
// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

// parameters number
// returns string
// examples
// pseudo code given a number create a variable that will hold an array of those numbers by making it into a string and spliting it, then use map to check each element and the following element to see if they are both odd if they are add a dash to the first element and return the array then join it back into a string

const insertDash = (num) => {
  const numArr = num.toString().split("");
  return numArr
    .map((x, y) => (+x % 2 == 1 && +numArr[y + 1] % 2 == 1 ? x + "-" : x))
    .join("");
};

// console.log(insertDash(454793)); // '4547-9-3'
// console.log(insertDash(123456)); // '123456'
// console.log(insertDash(1003567)); // '1003-567'

// The Office I - Outed
// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

// parameters object and string
// returns string
// examples
// pseudo code given an object create a variable to hold its keys, and an empty variable to hold the score of people in the room, use a for loop to iterate through the object and check to see if the person is the boss if they are multiply their score by 2, then check to see if the total of the scores divided by the number of people in the room is less than or equal to 5

const outed = (meet, boss) => {
  let people = Object.keys(meet);
  let starter = 0;
  for (let i = 0; i < people.length; i++) {
    people[i] == boss
      ? (starter += meet[people[i]] * 2)
      : (starter += meet[people[i]]);
  }
  return starter / people.length <= 5 ? "Get Out Now!" : "Nice Work Champ!";
};

// console.log(
//   outed(
//     {
//       tim: 0,
//       jim: 2,
//       randy: 0,
//       sandy: 7,
//       andy: 0,
//       katie: 5,
//       laura: 1,
//       saajid: 2,
//       alex: 3,
//       john: 2,
//       mr: 0,
//     },
//     "laura"
//   )
// ); // 'Get Out Now!'
// console.log(
//   outed(
//     {
//       tim: 1,
//       jim: 3,
//       randy: 9,
//       sandy: 6,
//       andy: 7,
//       katie: 6,
//       laura: 9,
//       saajid: 9,
//       alex: 9,
//       john: 9,
//       mr: 8,
//     },
//     "katie"
//   )
// ); // 'Nice Work Champ!'
// console.log(
//   outed(
//     {
//       tim: 2,
//       jim: 4,
//       randy: 0,
//       sandy: 5,
//       andy: 8,
//       katie: 6,
//       laura: 2,
//       saajid: 2,
//       alex: 3,
//       john: 2,
//       mr: 8,
//     },
//     "john"
//   )
// ); // 'Get Out Now!'
