// Minimum Perimeter of a Rectangle

// A rectangle is can be defined by two factors: height and width.

// Its area is defined as the multiplication of the two: height * width.

// Its perimeter is the sum of its four edges: height + height + width + width.

// It is possible to create rectangles of the same area but different perimeters. For example, given an area of 45, the possible heights, widths and resultant perimeters would be:

// (1, 45) = 92

// (9, 5) = 28

// (15, 3) = 36

// Note that (6, 7.5) has an area of 45 too, but is discarded in this kata because its width is non integral.

// The task is to write a function that, given an area as a positive integer, returns the smallest perimeter possible of a rectangle with integral side lengths.

// Input range:
// 1 <= area <= 5 x 10 ^ 10

// parameters integer
// return integer
// examples
// pseudo code create an empty array to hold the result, iterate from 0 to the integer checking to see if the modulus is equal to 0 if it is push the result of mulitplying the integer by 2 and adding the product of dividing the area by the inteer and mulitplying it by two, use math.min to find the smallest integer

function minimumPerimeter(area) {
  let holder = [];
  for (let i = 0; i < area; i++) {
    if (area % i == 0) {
      //   console.log(i * 2 + (area / i) * 2);
      holder.push(i * 2 + (area / i) * 2);
    }
  }

  return Math.min(...holder);
}

console.log(minimumPerimeter(45)); // 28

// console.log(minimumPerimeter(30)); // 22

// console.log(minimumPerimeter(81)); // 36

// console.log(minimumPerimeter(89)); // 180
