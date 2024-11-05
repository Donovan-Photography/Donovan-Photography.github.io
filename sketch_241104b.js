let brushType = 1;  // Starting with the first brush
let brushColor;

function setup() {
  createCanvas(2000, 2000);
  background(255);
  brushColor = color(0); // Default brush color (black)
}

function draw() {
  if (mouseIsPressed) {
    // Set the brush color based on the mouse position for variety
    brushColor = color(mouseX % 255, mouseY % 255, (mouseX + mouseY) % 255);
    stroke(brushColor);
    fill(brushColor);

    // Choose brush type based on brushType variable
    switch (brushType) {
      case 1:
        basicBrush();
        break;
      case 2:
        splatterBrush();
        break;
      case 3:
        lineBrush();
        break;
      case 4:
        squareBrush();
        break;
      case 5:
        softBrush();
        break;
      case 6:
        stippleBrush();   // Brush 6: Stippling effect
        break;
      case 7:
        starBrush();      // Brush 7: Star-shaped brush
        break;
      case 8:
        waveBrush();      // Brush 8: Wavy line brush
        break;
      case 9:
        trailBrush();     // Brush 9: Trail effect
        break;
      case 10:
        scatterBrush();   // Brush 10: Scatter effect
        break;
    }
  }
}

// Switch brush types with number keys 1-0
function keyPressed() {
  if (key >= '1' && key <= '9') {
    brushType = int(key);
  } else if (key === '0') {
    brushType = 10;
  } else if (key === 'c' || key === 'C') {
    background(255);  // Clear screen if 'c' is pressed
  }
}

// Basic round brush
function basicBrush() {
  ellipse(mouseX, mouseY, 20, 20);
}

// Splatter brush (randomly positioned small circles)
function splatterBrush() {
  for (let i = 0; i < 10; i++) {
    let offsetX = random(-10, 10);
    let offsetY = random(-10, 10);
    ellipse(mouseX + offsetX, mouseY + offsetY, random(5, 10), random(5, 10));
  }
}

// Line brush (draws a line from the previous position to the current position)
function lineBrush() {
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

// Square brush (draws a rectangle)
function squareBrush() {
  rect(mouseX - 10, mouseY - 10, 20, 20);
}

// Soft brush (faded circles)
function softBrush() {
  for (let i = 0; i < 5; i++) {
    noStroke();
    fill(brushColor.levels[0], brushColor.levels[1], brushColor.levels[2], 50 - i * 10);
    ellipse(mouseX, mouseY, 30 - i * 5, 30 - i * 5);
  }
}

// Brush 6: Stipple Brush (small dots clustered around the cursor)
function stippleBrush() {
  for (let i = 0; i < 20; i++) {
    let offsetX = random(-15, 15);
    let offsetY = random(-15, 15);
    ellipse(mouseX + offsetX, mouseY + offsetY, 2, 2);
  }
}

// Brush 7: Star Brush (draws star shapes around the cursor)
function starBrush() {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = radians(i * 144);
    let x = mouseX + cos(angle) * 10;
    let y = mouseY + sin(angle) * 10;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// Brush 8: Wave Brush (draws wavy lines following the cursor)
function waveBrush() {
  noFill();
  strokeWeight(2);
  beginShape();
  for (let x = pmouseX; x <= mouseX; x += 5) {
    let y = sin((x + frameCount) * 0.1) * 10 + mouseY;
    vertex(x, y);
  }
  endShape();
}

// Brush 9: Trail Brush (leaves a fading trail as you move the cursor)
function trailBrush() {
  noStroke();
  fill(brushColor.levels[0], brushColor.levels[1], brushColor.levels[2], 50);
  for (let i = 0; i < 5; i++) {
    ellipse(mouseX - i * 3, mouseY - i * 3, 15, 15);
  }
}

// Brush 10: Scatter Brush (draws larger circles scattered around the cursor)
function scatterBrush() {
  for (let i = 0; i < 8; i++) {
    let offsetX = random(-20, 20);
    let offsetY = random(-20, 20);
    ellipse(mouseX + offsetX, mouseY + offsetY, random(10, 15), random(10, 15));
  }
}
