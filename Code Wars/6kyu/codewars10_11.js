// Lottery Ticket

// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// parameters array, number
// return string
// examples
// pseudo code create an empty variable to hold the result, given an array iterate through it using foreach and get the first element, see if the first element includes the result of converting the number into a letter, add one to the variable holding the result, check to see if the result is bigger than the number needed to win

const bingo = (tic, win) => {
  let holder = 0;

  tic.forEach((game) => {
    console.log(String.fromCharCode(game[1]));
    if (game[0].includes(String.fromCharCode(game[1]))) {
      holder++;
    }
  });

  return holder >= win ? "Winner!" : "Loser!";
};

// console.log(
//   bingo(
//     [
//       ["AAC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     2
//   )
// ); // 'Loser!'

// console.log(
//   bingo(
//     [
//       ["ABC", 65],
//       ["HGR", 74],
//       ["BYHT", 74],
//     ],
//     1
//   )
// ); // 'Winner!'

// console.log(
//   bingo(
//     [
//       ["HGTYRE", 74],
//       ["BE", 66],
//       ["JKTY", 74],
//     ],
//     3
//   )
// ); // 'Loser!'

// console.log(
//   bingo(
//     [
//       ["ONQLXI", 75],
//       ["BTZPLU", 89],
//       ["PRDFTT", 84],
//       ["UVVADO", 72],
//       ["VHSWWHSC", 83],
//     ],
//     2
//   )
// ); // 'Winner!'

// console.log(
//   bingo(
//     [
//       ["KOT", 69],
//       ["LUT", 72],
//       ["WGCRCPS", 87],
//       ["PYYQIMXI", 73],
//       ["DCFIK", 65],
//     ],
//     3
//   )
// );
