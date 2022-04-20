// // RANDOM PICKER FUNCTION
// const fruits = [
//   { name: "mango", score: 1 },
//   { name: "blueberry", score: 1 },
//   { name: "cherry", score: 3 },
//   { name: "apple", score: 5 },
// ];
// let sum = 0;
// for (const { _, score } of fruits) sum += score;
// for (const element of fruits) element.prob = element.score / sum;

// const RandomByPercentage = (arr) => {
//   let picked = undefined;

//   while (picked === undefined) {
//     let r = Math.random();
//     for (const { name, _, prob } of arr) {
//       if (r - prob > 0) r -= prob;
//       else {
//         picked = name;
//         return picked;
//       }
//     }
//   }
// };

// for (let i = 0; i < 10; i++) console.log(RandomByPercentage(fruits));
// for (let i = 0; i < 10; i++) console.log(RandomByPercentage(fruits));
// for (let i = 0; i < 10; i++) console.log(RandomByPercentage(fruits));
// console.log(RandomByPercentage(fruits));

function setup() {
  createCanvas(350, 350);
}

function draw() {
  background(50);
}
