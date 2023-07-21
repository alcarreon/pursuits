// Word Challenges at School
// The principal of a school likes to put challenges to the students related with finding words of certain features. One day she said: "Dear students, the challenge for today is to find a word that has only one vowel and seven consonants but cannot have the letters "y" and "m". I'll give a special award for the first student that finds it." One of the students used his dictionary and spent all the night without sleeping, trying in vain to find the word. The next day, the word had not been found yet. This student observed that the principal has a pattern in the features for the wanted words:

// The word should have n vowels, may be repeated, for example: in "engineering", n = 5.

// The word should have m consonants, may be repeated also: in "engineering", m = 6.

// The word should not have some forbidden letters (in an array), forbid_letters

// You will be provided with a list of words, WORD_LIST(python/crystal), wordList(javascript), wordList (haskell), $word_list(ruby), and you have to create the function, wanted_words(), that receives the three arguments in the order given above, wanted_words(n, m, forbid_list)and output an array with the word or an array, having the words in the order given in the pre-loaded list, in the case of two or more words were found.

// Let's see some cases:

// wantedWords(1, 7, ["m", "y"]) == ["strength"]
// wantedWords(3, 7, ["m", "y"]) == ['afterwards', 'background', 'photograph', 'successful', 'understand']
// For cases where no words are found the function will output an empty array.

// wantedWords(3, 7, ["a", "s" , "m", "y"]) == []
// Help our student to win this and the next challenges of the school. He needs to sure about a suspect that he has. That many times there are no solutions for what the principal is asking for. All words have its letters in lowercase format. Enjoy it!

// parameters 2 integers and an array
// return array
// examples
// pseudo code create an array with vowels and an empty object, iterate over the array of words and create a counter for vowels and consonants, and a variable which defaults to false that the word does not contain a forbiden character, split the words and then iterate over that array checking to see if any of the characters are forbiden, then check to see if the character is a vowel and add to the counter, otherwise add to the consonant counter, create an array and add the word and the counters to the object, convert the object into an array and then filter out words that do not meet the parameters, iterate over that array and return the first element

function wantedWords(vowelNum, consonants, forbiden) {
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = {};

  wordList.forEach((x) => {
    let vowelCount = 0;
    let consonantCount = 0;
    let containsForbiden = false;
    // console.log(x.split(""));
    x.split("").forEach((y) => {
      if (forbiden.includes(y)) {
        containsForbiden = true;
      }
      if (vowels.includes(y)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    });
    counter[x] = [
      ["vowels", vowelCount],
      ["consonants", consonantCount],
      ["forbiden", containsForbiden],
    ];
  });
  let convertedCounter = Object.entries(counter);
  let rightWords = convertedCounter.filter(
    (x) =>
      x[1][0][1] == vowelNum && x[1][1][1] == consonants && x[1][2][1] == false
  );
  return rightWords.map((x) => x[0]);
}

// let wordList = [
//   "a",
//   "ability",
//   "able",
//   "about",
//   "above",
//   "absence",
//   "absolutely",
//   "academic",
//   "accept",
//   "access",
//   "accident",
//   "accompany",
//   "according",
//   "account",
//   "achieve",
//   "achievement",
//   "acid",
//   "acquire",
//   "across",
//   "act",
//   "action",
//   "active",
//   "activity",
//   "actual",
//   "actually",
//   "add",
//   "addition",
//   "additional",
//   "address",
//   "administration",
//   "admit",
//   "adopt",
//   "adult",
//   "advance",
//   "advantage",
//   "advice",
//   "advise",
//   "affair",
//   "affect",
//   "afford",
//   "afraid",
//   "after",
//   "afternoon",
//   "afterwards",
//   "again",
//   "against",
//   "age",
//   "agency",
//   "agent",
//   "ago",
//   "agree",
//   "agreement",
//   "ahead",
//   "aid",
//   "aim",
//   "air",
//   "aircraft",
//   "all",
//   "allow",
//   "almost",
//   "alone",
//   "along",
//   "already",
//   "alright",
//   "also",
//   "alternative",
//   "although",
//   "always",
//   "among",
//   "amongst",
//   "amount",
//   "an",
//   "analysis",
//   "ancient",
//   "and",
//   "animal",
//   "announce",
//   "annual",
//   "another",
//   "answer",
//   "any",
//   "anybody",
//   "anyone",
//   "anything",
//   "anyway",
//   "apart",
//   "apparent",
//   "apparently",
//   "appeal",
//   "appear",
//   "appearance",
//   "application",
//   "apply",
//   "appoint",
//   "appointment",
//   "approach",
//   "appropriate",
//   "approve",
//   "area",
//   "argue",
// ];
const wordList = ["afford", "afraid", "after", "afternoon", "afterwards"];
// console.log(wantedWords(1, 7, ["m", "y"])); //["strength"]

console.log(wantedWords(3, 7, ["m", "y"])); // ["afterwards","background","photograph","successful","understand",]

// console.log(wantedWords(3, 7, ["a", "s", "m", "y"])); // []
