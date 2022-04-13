// // Collect input from a user
// let max = prompt(`Enter max number?`);
// let min = prompt(`Enter min number?`);

// // Convert the input to a number
// max = parseInt(max);
// min = parseInt(min);
// // Use Math.random() and the user's number to generate a random number
// let result = Math.floor(Math.random() * (max - min + 1) + min);

// // Create a message displaying the random number
// console.log(`${result} It's random number between ${min} and ${max}`);

const date = new Date();

const hour = date.getHours();

let result;
const name = prompt(`Enter your name`);

if (hour > 5 && hour < 12) {
  result = `Good Morning!`;
} else if (hour >= 12 && hour <= 17) {
  result = `Good Afternoon!`;
} else {
  result = `Good Evening!`;
}
const main = document.querySelector(`main`);
main.innerHTML = `<p>Hello ${name}, ${result}, It's ${hour} o'clock</p>`;
