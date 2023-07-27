// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// parameters integer
// return integer
// examples
// pseudo code convert the integer into a string and split it by each character, then reduce the
// array if the result is less than 10 return the result otherwise call the function again until it is less than 10


function digitalRoot(num){
    let convertedNum = num.toString().split('')
    if(convertedNum.reduce((x,y) => +x + +y) < 10){
        return +convertedNum.reduce((x,y) => +x + +y)
    }else{
        return digitalRoot(convertedNum.reduce((x,y) => +x + +y))
    }

}

console.log(digitalRoot(16)) // 7

console.log(digitalRoot(942)); // 6

console.log(digitalRoot(456)) // 6