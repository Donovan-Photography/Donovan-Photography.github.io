



var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(220);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  text("Score: " + score, width / 2, 40);
}

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score >= 5) {
    gameState = "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
}

function levelTwo() {
  text("Level 2!", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score >= 15) {
    gameState = "L3";
  }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
}

function levelThree() {
  text("Level 3!", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    if (ballSize > 10) {
      ballSize -= 5;
    }
  }
  if (score >= 20) {
    text("You Win!", width / 2, height / 2);
  }
  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
}
