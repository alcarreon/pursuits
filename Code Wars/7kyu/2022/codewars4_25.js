function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  var fac2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (fac1 < fac2) {
    return fighter2.name;
  } else if (fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
); // "Lew"
// console.log(
//   declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
// ); // "Harry"
// console.log(
//   declareWinner(
//     new Fighter("Harald", 20, 5),
//     new Fighter("Harry", 5, 4),
//     "Harry"
//   )
// ); // "Harald"
