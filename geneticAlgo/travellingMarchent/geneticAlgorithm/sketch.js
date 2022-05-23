const points = [];
let order = [];
let population = [];
let populationSize = 10;
let bestPath = [...order];
let totalPoints = 7;
let shortestDist;
let newPopulation = [];

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.addClass("canvas-01");

  for (let i = 0; i < totalPoints; i++) {
    points.push(createVector(random(25, width - 25), random(25, height - 25)));
    order.push(i);
  }
  shortestDist = FindDistanceBetween(points, order);

  for (let i = 0; i < populationSize; i++) {
    population[i] = new Population(points, shuffle(order));
  }
}

for (let i = 0; i < populationSize; i++) {
  newPopulation[i] = crossover(points, population);
}

function draw() {
  background(51);

  // for (let i = 0; i < populationSize; i++) {
  //   if (population[i].distance < shortestDist) {
  //     shortestDist = population[i].distance;
  //     bestPath = [...population[i].order];
  //   }
  // }

  // drawEllipse(points, [0, 255, 255, 150]);
  // drawLines(points, bestPath, [0, 255, 255, 150], 5);

  // population = [...newPopulation];

  // if (shortestDist > FindDistanceBetween(points, order)) {
  //   shortestDist = FindDistanceBetween(points, order);
  //   bestPath = [...order];
  // }
  // console.log(...order);
  // console.log(`Distance: ${FindDistanceBetween(points, order)}`);

  // drawEllipse(points, [0, 255, 255, 150]);

  // if (lexicographicOrder(order) !== undefined) {
  //   drawLines(points, order, [255, 255, 255, 150]);
  //   drawLines(points, bestPath, [0, 255, 255, 150], 5);
  //   order = lexicographicOrder(order);
  // } else {
  //   drawLines(points, bestPath, [0, 255, 255, 150], 5);
  //   console.log("finished...");
  //   console.log(`Shortest Distance: ${shortestDist}`);
  //   noLoop();
  // }
}

class Population {
  constructor(arr, order) {
    this.order = [...order];
    this.distance = FindDistanceBetween(arr, this.order);
    this.fitness = 1 / (this.distance + 1);
  }
}

function selection(arr) {
  let sum = 0;
  let picked = undefined;

  for (const item of arr) sum += item.fitness;
  for (const item of arr) item.fitness = item.fitness / sum;

  while (picked === undefined) {
    let r = Math.random();
    for (const item of arr) {
      if (r - item.fitness > 0) r -= item.fitness;
      else {
        picked = { ...item };
        return picked;
      }
    }
  }
}

function crossover(points, arr) {
  let arr1 = [...selection(arr).order];
  let arr2 = [...selection(arr).order];
  let length1 = Math.floor(arr1.length / 2);
  let newArr = [];

  for (let i = 0; i < length1; i++) {
    newArr[i] = arr1[i];
  }
  newArr = newArr.concat(arr2.splice(length1));

  return new Population(points, newArr);
}

function drawEllipse(arr, color = [255]) {
  fill(...color);
  noStroke();
  for (const item of arr) ellipse(item.x, item.y, 13, 13);
}

function drawLines(arr, arr2, color = [255, 255, 255], weight = 1) {
  stroke(...color);
  strokeWeight(weight);
  noFill();
  beginShape();
  for (const i of arr2) {
    vertex(arr[i].x, arr[i].y);
  }
  // vertex(arr[arr2[0]].x, arr[arr2[0]].y);
  endShape();
}

function SwapPositions(arr) {
  const i = floor(random(totalPoints));
  const j = floor(random(totalPoints));

  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function FindDistanceBetween(arr, arr2) {
  let totalDist = 0;

  for (let i = 0; i < arr2.length - 1; i++)
    totalDist += dist(
      arr[arr2[i]].x,
      arr[arr2[i]].y,
      arr[arr2[i + 1]].x,
      arr[arr2[i + 1]].y
    );

  // totalDist += dist(
  //   arr[arr2[arr2.length - 1]].x,
  //   arr[arr2[arr2.length - 1]].y,
  //   arr[0].x,
  //   arr[0].y
  // );

  return totalDist;
}

function lexicographicOrder(arr) {
  let newArr = [];
  newArr = [...arr];
  tmpArr = [];
  let x = -1;
  let y = -1;

  // x = largest index so that arr[i] < arr[j]
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] < newArr[i + 1]) x = i;
  }
  // y = largest index such that arr[x] < arr[j]
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[x] < newArr[j]) y = j;
  }
  // swap arr[x] and arr[y]
  [newArr[x], newArr[y]] = [newArr[y], newArr[x]];
  // reverse arr[x+1]...length of arr
  tmpArr = newArr.splice(x + 1);
  tmpArr.reverse();
  // concat
  newArr = newArr.concat(tmpArr);

  if (x !== -1) return newArr;
}
