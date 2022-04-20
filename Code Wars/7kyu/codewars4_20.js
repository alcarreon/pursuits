// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
let highAndLow = (str) => {
  let arr = str.split(" ");
  return `${Math.max(...arr).toString()} ${Math.min(...arr).toString()}`;
};
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
