// Santa's Naughty List

// Christmas is coming, and Santa has a long list to go through, to find who deserves presents for the big day. Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

// Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

// parameters two array
// return array
// examples
// pseudo code given two arrays use filter to only keep names on santa's list then use set operator to remove duplicates and then finally sort the array

let findChildren = (sanList, children) => {
  return [...new Set(sanList.filter((x) => children.includes(x)))].sort();
};

console.log(
  findChildren(
    ["Jason", "Jackson", "Jordan", "Johnny"],
    ["Jason", "Jordan", "Jennifer"]
  )
); // ["Jason", "Jordan"]

console.log(
  findChildren(
    ["jASon", "JAsoN", "JaSON", "jasON"],
    ["JasoN", "jASOn", "JAsoN", "jASon", "JASON"]
  )
); // ["JAsoN", "jASon"]

console.log(
  findChildren(["Jason", "James", "Johnson"], ["Jason", "James", "JJ"])
); // ["James", "Jason"]
