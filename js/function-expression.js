//Function declarations
function diceRoll() {
  const dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}
//Function expression
const random100 = function () {
  const ranNum = Math.floor(Math.random() * 100) + 1;
  return ranNum;
};
console.log(diceRoll());
console.log(random100());
