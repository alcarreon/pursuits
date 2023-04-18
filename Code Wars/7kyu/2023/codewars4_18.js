// Cats in hats

// The Cat In The Hat has cat A under his hat, cat A has cat B under his hat and so on until Z

// The Cat In The Hat is 2,000,000 cat units tall.

// Each cat is 2.5 times bigger than the cat underneath their hat.

// Find the total height of the cats if they are standing on top of one another.

// Counting starts from the Cat In The Hat

// n = the number of cats

// fix to 3 decimal places.

// parameters integer
// return integer
// examples
// pseudo code use a for loop to iterate the number of times provided by the number provided, add the additional start point then divide by 2.5

function height(n) {
  let startPoint = 2000000;
  let result = 0;

  for (let i = 0; i <= n; i++) {
    result += startPoint;
    startPoint /= 2.5;
  }

  return result.toFixed(3);
}

// console.log(height(7)); // "3331148.800"

// console.log(height(0)); // "2000000.000"

console.log(height(2)); // '3120000.000'

console.log(height(1)); // '2800000.000'

// units / 2.5
