const points = [];
let bestPath = points;
let totalPoints = 10;
let shortestDist;

function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < totalPoints; i++)
    points.push(createVector(random(25, width - 25), random(25, height - 25)));

  shortestDist = FindDistance(points);
}

function draw() {
  background(51);

  if (shortestDist > FindDistance(points)) {
    shortestDist = FindDistance(points);
    bestPath = [...points];
  }
  console.log(shortestDist);

  fill(0, 255, 0, 150);
  noStroke();
  for (const point of points) {
    ellipse(point.x, point.y, 13, 13);
  }

  drawLines(points, [255, 255, 255, 150]);
  drawLines(bestPath, [0, 255, 0, 150], 5);

  SwapPositions(points);
}

function drawLines(arr, color = [255, 255, 255], weight = 1) {
  stroke(...color);
  strokeWeight(weight);
  noFill();
  beginShape();
  for (const item of arr) {
    vertex(item.x, item.y);
  }
  vertex(arr[0].x, arr[0].y);
  endShape();
}

function SwapPositions(arr) {
  const i = floor(random(totalPoints));
  const j = floor(random(totalPoints));

  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function FindDistance(arr) {
  let totalDist = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    totalDist += dist(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y);
  }
  totalDist += dist(
    arr[arr.length - 1].x,
    arr[arr.length - 1].y,
    arr[0].x,
    arr[0].y
  );

  return totalDist;
}
