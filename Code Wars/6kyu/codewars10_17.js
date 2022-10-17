// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

// Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

// If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

let balance = (str1, str2) => {
  let left = 0;
  let right = 0;
  let splitStr1 = str1.split("");
  let splitStr2 = str2.split("");

  let countedLeft = splitStr1.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  let countedRight = splitStr2.reduce((x, y) => {
    x[y] = (x[y] || 0) + 1;
    return x;
  }, {});

  let arrLeft = Object.entries(countedLeft);
  let arrRight = Object.entries(countedRight);

  //   let counted = [
  //     ...Object.entries(countedLeft),
  //     ...Object.entries(countedRight),
  //   ];

  //   console.log(arrLeft);
  arrLeft.map((x) => {
    if (x[0] == "!") {
      left += x[1] * 2;
    } else if (x[0] == "?") {
      left += x[1] * 3;
    }
  });

  arrRight.map((x) => {
    if (x[0] == "!") {
      right += x[1] * 2;
    } else if (x[0] == "?") {
      right += x[1] * 3;
    }
  });

  if (left > right) {
    return "Left";
  } else if (left < right) {
    return "Right";
  } else if (left == right) {
    return "Balance";
  }
};

// console.log(balance("!!", "??")); // 'Right'

console.log(balance("!??", "?!!")); // "Left"

console.log(balance("!?!!", "?!?")); // "Left"

console.log(balance("!!???!????", "??!!?!!!!!!!")); // "Balance"
