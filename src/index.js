import './sass/index.scss';
import Environment from './environment';
import Character from './character';
import Critter from './critter';

const canvas = document.getElementById('root-game');
const ctx = canvas.getContext("2d");

let stageProgress = 0;
const moveSpeed = 10;
let direction = 'neutral';
let maxJumpHeight = 200;
let jumpSpeed = 20;
let fallSpeed = 10;
let height = 0;
let jumping = false;
let falling = false;
// Keyboard Controls

let leftPressed = false;
let rightPressed = false;
let upPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
    direction = "right";
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
    direction = "left";
  } else if ((e.key === "Up" || e.key === "ArrowUp") && jumping === false && falling === false) {
    upPressed = true;
    // direction = "neutral";
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = false;
  }
}

// context, keyframe per 60 fps, display width, display height
let floortiles = new Environment(ctx, 4, 800, 200);
let mc = new Character(ctx, 4, 100, 100);

function runGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // move stage progression
  if (rightPressed === true) {
    stageProgress += moveSpeed;
  } else if (leftPressed === true) {
    stageProgress -= moveSpeed;
  }
  
  // Jumping logic - character still jumps infinitely if up is held
  if (upPressed === true && (jumping === false && falling === false)) {
    jumping = true;
    falling = true;
  }
  if (jumping === true) {
    if (height <= maxJumpHeight) {
      height += jumpSpeed;
    } else {
      jumping = false;
    }
  }
  if (falling === true) {
    if (height <= 0) {
      height = 0;
      falling = false;
    } else {
      height -= fallSpeed;
    }
  }

  // pass in stage progress to background render
  floortiles.render(stageProgress);

  // render main character
  mc.render(stageProgress, direction, height);

  requestAnimationFrame(runGame);
}

runGame();


