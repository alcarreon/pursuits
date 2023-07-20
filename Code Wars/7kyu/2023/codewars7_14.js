// Aerial Firefighting

// You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).

// The given string is a 2D plane of random length consisting of two characters:

// x representing fire
// Y representing buildings.
// Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.

// Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).

// You must return the minimum number of waterbombs it would take to extinguish the fire in the string.

// Note: all inputs will be valid.

// Examples
// "xxYxx" and w = 3      -->  2 waterbombs needed
// "xxYxx" and w = 1      -->  4
// "xxxxYxYx" and w = 5   -->  3
// "xxxxxYxYx" and w = 2  -->  5

// parameters string and integer
// return integer
// examples
// pseudo code split the string by each Y character and remove any empty spaces, then iterate over the array checking to see if the length of the element is less than the width, otherwise divide the length by the width and round up, reduce the array

function waterbombs(str, width) {
  let splitStr = str.split("Y").filter((x) => x != "");
  return splitStr
    .map((x) => {
      if (x.length <= width) {
        return 1;
      } else {
        return Math.ceil(x.length / width);
      }
    })
    .reduce((x, y) => x + y, 0);
}

console.log(waterbombs("xxYYxYxxxYYxxxYxYxxxxxYYxY", 4));

// console.log(waterbombs("xxxxYxYx", 4)); // 3

// console.log(waterbombs("xxYxx", 3)); // 2

console.log(waterbombs("Y", 4)); // 0

// console.log(waterbombs("xx", 1)); // 2

// console.log(waterbombs("xxYxx", 3)); // 2

// console.log(waterbombs("xxxYx", 1)); // 4

// console.log(waterbombs("xxxxYxYx", 4)); // 3

// console.log(waterbombs("xxxxxYxYx", 2)); // 5;
