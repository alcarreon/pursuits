// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

let descendingOrder = (num) => {
  let numArr = num.toString().split("");
  let NewArr = Number(numArr.sort((x, y) => y - x).join(""));
  return NewArr;
};

// console.log(descendingOrder(0)); // 0
// console.log(descendingOrder(1)); // 1
// console.log(descendingOrder(15)); // 51
// console.log(descendingOrder(1021)); // 2110
// console.log(descendingOrder(123456789)); // 987654321

// Simple, given a string of words, return the length of the shortest word(s).

let findShort = (str) => {
  let arrStr = str.split(" ").sort((x, y) => x.length - y.length)[0].length;
  return arrStr;
};

// console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
// console.log(findShort("turns out random test cases are easier than writing out basic ones")) // 3
// console.log(findShort("Let's travel abroad shall we")) // 2

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

let friend = (arr) => {
  let filterArr = arr.filter((x) => x.length == 4);
  return filterArr;
};

// console.log(friend(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])); // ["Ryan"]
// console.log(
//   friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
// ); // ["Jimm", "Cari", "aret"]
// console.log(friend(["Love", "Your", "Face", "1"])); // ["Love", "Your", "Face"]

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

let openOrSenior = (arr) => {
  let members = arr.map((x) => {
    if (x[0] >= 55 && x[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
  return members;
};

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); // ['Open', 'Senior', 'Open', 'Senior']
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [53, 23],
  ])
); // ['Open', 'Open', 'Open', 'Open']
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
); //['Senior', 'Open', 'Open', 'Open']
