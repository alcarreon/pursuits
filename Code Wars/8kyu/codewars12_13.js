// No zeros for heros

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

// parameters integer
// return integer
// examples
// pseudo code see if the number divided by 10 is 0 or if the number itself is 0 otherwise recursively do the function again dividing the number by 10

function noBoringZeros(n) {
  return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}

// console.log(noBoringZeros(1450)); // 145
// console.log(noBoringZeros(960000)); // 96
// console.log(noBoringZeros(0)); // 0
// console.log(noBoringZeros(-1050)); // -105
