// Fibonacci's FizzBuzz

// Instructions
// The goal of this kata is two-fold:

// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

// For the sake of this kata, you can assume all input will be a positive integer.

// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

// Examples
// Input:

// fibsFizzBuzz(5)
// Output:

// [ 1, 1, 2, 'Fizz', 'Buzz' ]
// Input:

// fibsFizzBuzz(1)
// Output:

// [1]
// Input:

// fibsFizzBuzz(20)
// Output:

// [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]

// parameters integer
// return array
// examples
// pseudo code create an initial array with the first two elements of the sequence then use a for loop to generate the rest of the sequence, after that iterate over the array and check each element to see if it is divisible by 15, 5, or 3 change the element depending on which condition it meets

function fibsFizzBuzz(num) {
  let holder = [1, 1];
  if (num == 1) {
    return [holder[0]];
  } else if (num == 2) {
    return holder;
  } else if (num >= 2) {
    for (let i = 2; i < num; i++) {
      holder.push(holder[i - 1] + holder[i - 2]);
    }
  }
  return holder.map((x) => {
    if (x % 15 == 0) {
      return (x = "FizzBuzz");
    } else if (x % 5 == 0) {
      return (x = "Buzz");
    } else if (x % 3 == 0) {
      return (x = "Fizz");
    } else {
      return x;
    }
  });
}

console.log(fibsFizzBuzz(2)); // [ 1, 1 ]

console.log(fibsFizzBuzz(5)); // [ 1, 1, 2, 'Fizz', 'Buzz' ]

console.log(fibsFizzBuzz(20)); // [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
