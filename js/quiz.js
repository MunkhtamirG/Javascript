/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector("main");
/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const questions1 = prompt(`6x4=`);
const questions2 = prompt(`6x8=`);
const questions3 = prompt(`2x3=`);
const questions4 = prompt(`5x3=`);
const questions5 = prompt(`6x3=`);

if (+questions1 == 24) {
  correct += 1;
}
if (+questions2 == 48) {
  correct += 1;
}
if (+questions3 == 6) {
  correct += 1;
}
if (+questions4 == 15) {
  correct += 1;
}
if (+questions5 == 18) {
  correct += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (correct == 5) {
  rank = `Gold`;
} else if (correct == 3 || correct == 4) {
  rank = `Silver`;
} else if (correct == 1 || correct == 2) {
  rank = `Bronze`;
} else {
  rank = `No Crown`;
}

// 6. Output results to the <main> element
main.innerHTML = `<h1>${rank}</h1>`;
