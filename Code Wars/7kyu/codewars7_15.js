// Slaphead
// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

// parameters string
// returns array
// examples
// pseudo code two empty variables on to hold the count of / and one to hold the string depending on what number the first empty variable is, given a string split it into an array and use map to check each element, if it is / then add 1 to the empty variable holding the number otherwise return the element back finally join the string, use a conditional to check what the variable holding the number of occurences of / is

const bald = (string) => {
  let starter = 0;
  hairString = "";
  let arrHolder = string
    .split("")
    .map((x) => {
      if (x == "/") {
        starter += 1;
        return "-";
      } else {
        return x;
      }
    })
    .join("");
  if (starter == 0) {
    hairString = "Clean!";
  } else if (starter == 1) {
    hairString = "Unicorn!";
  } else if (starter == 2) {
    hairString = "Homer!";
  } else if (starter <= 5 && starter >= 3) {
    hairString = "Careless!";
  } else if (starter > 5) {
    hairString = "Hobo!";
  }

  return [arrHolder, hairString];
};

// console.log(bald("/---------")); // ['----------', 'Unicorn!']
// console.log(bald("/-----/-")); // ['--------', 'Homer!']
// console.log(bald("--/--/---/-/---")); // ['---------------', 'Careless!']
// console.log(bald("-/----//"));

// String Scramble

// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

// Ex:

// scramble('abcd', [0,3,1,2]) -> 'acdb'

// The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.

// In other words, put the first character in the string at the index described by the first element of the array

// You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

// parameters string, array
// returns string
// examples
// pseudo code create an empty array the same length as the array given, then split the string into an array, use map to go through each element of the split string and replace the element at the index of the given array with the empty array finally join the previously empty array back into a string

const scramble = (str, arr) => {
  let holder = [...Array(arr.length)];
  let strArr = str.split("");
  strArr.map((x, y) => (holder[arr[y]] = x));
  return holder.join("");
};

// console.log(scramble("abcd", [0, 3, 1, 2])); // 'acdb'
// console.log(scramble("sc301s", [4, 0, 3, 1, 5, 2])); // "c0s3s1"
// console.log(scramble("bskl5", [2, 1, 4, 3, 0])); // "5sblk"
