// const urt = prompt(`Urt`);
// const urgun = prompt(`Urgun`);
// const getArea = function (a, b) {
//   const result = +a * +b;
//   return result;
// };
// console.log(getArea(+urt, +urgun));

// const Height = prompt(`Height?`);
// const Weight = prompt(`Weight?`);
// const getBMI = function (a, b) {
//   const result = Math.floor(b / ((a / 100) * (a / 100)));
//   if (result < 18.5) {
//     return `Underweight`;
//   } else if (result >= 18.6 && result <= 24.9) {
//     return `Normal weight`;
//   } else if (result >= 25 && result <= 29.9) {
//     return `Pre-obesity`;
//   } else if (result >= 30 && result <= 34.9) {
//     return `Obesity class I`;
//   } else if (result >= 35 && result <= 39.9) {
//     return `Obesity class II`;
//   } else {
//     return `Obesity class III`;
//   }
// };
// console.log(getBMI(+Height, +Weight));
// const main = document.querySelector(`main`);
// main.innerHTML = `<h1>You're ${getBMI(+Height, +Weight)}</h1>`;

const multiply = (a) => a * a;
const cmTom = (a) => a / 100;
const bmiCalc = (kg, cm) => {
  const height = cmTom(cm);
  const result = kg / multiply(height);
  return result;
};
console.log(bmiCalc(72, 170));

//Arrow Function Example

const arrow = (a) => a * a;
const arrow1 = function (a) {
  const result = a * a;
  return result;
};
