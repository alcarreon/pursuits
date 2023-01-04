// The old switcheroo

// Write a function

// vowel2index(str)
// that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
// E.g:

// vowel2index('this is my string') == 'th3s 6s my str15ng'
// vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// vowel2index('') == ''
// Your function should be case insensitive to the vowels.

// parameters string
// return string
// examples
// pseudo code iterate through the string using a for loop and check to see if each string is in the string vowels if it is replace it with the index plus one to an empty variable otherwise add the string to the empty variable

const vowel2index = (str) => {
  let holder = "";
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    vowels.includes(str[i].toLowerCase())
      ? (holder += i + 1)
      : (holder += str[i]);
  }
  return holder;
};

console.log(vowel2index("this is my string")); // 'th3s 6s my str15ng'
// console.log(vowel2index("Codewars is the best site in the world")); // 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
// console.log(vowel2index("Tomorrow is going to be raining")); // 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
// console.log(vowel2index("")); // ''
