function diceRoll() {
  const dice1 = Math.floor(Math.random() * 10) + 1;
  return dice1;
}
console.log(diceRoll());
function diceRoll1() {
  const dice2 = Math.floor(Math.random() * 100) + 1;
  return dice2;
}
console.log(diceRoll1());
function diceRoll2() {
  const dice3 = Math.floor(Math.random() * 1000) + 1;
  return dice3;
}
console.log(diceRoll2());
function getRandom(max, min) {
  const dice = Math.floor(Math.random() * (max - min + 1)) + min;
  return dice;
}
console.log(getRandom(10, 5));
console.log(getRandom(100, 90));
console.log(getRandom(1000, 900));
