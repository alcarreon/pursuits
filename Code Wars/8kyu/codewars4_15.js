// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

let squareSum = arr => arr.map(y => y ** 2).reduce((x,y) => x + y, 0)


console.log(squareSum([1,2]))
console.log(squareSum([0, 3, 4, 5]))
console.log(squareSum([]))
