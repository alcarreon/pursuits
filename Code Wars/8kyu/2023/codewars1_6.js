// Correct the mistakes of the character recognition software

// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// parameters string
// return string
// examples
// pseudo code use replace all with the three conditions we know are interpreted wrong

function correct(str) {
  return str.replaceAll("0", "O").replaceAll("1", "I").replaceAll("5", "S");
}

console.log(correct("L0ND0N")); // "LONDON"
console.log(correct("DUBL1N")); // "DUBLIN"
console.log(correct("51NGAP0RE")); // "SINGAPORE"
console.log(correct("BUDAPE5T")); // "BUDAPEST"
