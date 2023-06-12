// Walking in the hallway

// You are a security guard at a large company, your job is to look over the cameras. Finding yourself bored you decide to make a game from the people walking in a hallway on one of the cameras. As many people walk past the hallway you decide to figure out the minimum steps it will take before 2 people cross or come into contact with each other (assuming every person takes a step at the same time).

// People are represented as arrows, < for a person moving left and > for a person moving right and - for an empty space

// A step represents a person moving forward one -, each person moves 1 step at the same time

// in this example the first people to come in contact with each other do it after 1 step
// ---><----
// in this example the first people to come in contact with each other do it after 1 step
// --->-<------->----<-
// in the case that no people come in contact return -1
// ----<----->----

// parameters string
// return integer
// examples
// pseudo code split the string by each character, then iterate over the array creaying an element with the element and its index, finally iterate over that array only including the elements that are either < or > iterate over the length of the original string and use a map inside the for loop to update the elements index based on its relation to > finally check to see that that the elements or either > < and that the index of > is greater <

function contact(s) {
  let people = s
    .split("")
    .map((c, i) => [c, i])
    .filter(([c, i]) => c === ">" || c === "<");

  for (let step = 1; step <= s.length; step++) {
    people = people.map(([c, i]) => [c, c === ">" ? i + 1 : i - 1]);
    for (let i = 0; i < people.length - 1; i++) {
      if (
        people[i][0] === ">" &&
        people[i + 1][0] === "<" &&
        people[i][1] >= people[i + 1][1]
      ) {
        return step;
      }
    }
  }
  return -1;
}

// console.log(contact("---->---<")); // 2

// console.log(contact("----<-->---")); // -1

// console.log(contact("----><-----")); // 1

// console.log(contact(">>>>--<<<<<<<<<<<<<<<<<<<<")); // 2

// console.log(
//   contact(
//     ">---------------<--------------------------<-------->---------<------->----------<----<---->>----------<------->>>---------------<<------>"
//   )
// ); // 5
