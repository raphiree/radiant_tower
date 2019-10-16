import './sass/index.scss';
import Environment from './environment';
import Character from './character';
import { generateCritter, checkSpawn } from './critter';
import { critterArray } from './critter_db';
import { detectCollision } from './collision';

const canvas = document.getElementById('root-game');
const ctx = canvas.getContext("2d");
let idleFrames = 0;

let stageProgress = 2500;
const moveSpeed = 10;
let direction = 'neutral';
let maxJumpHeight = 200;
let jumpSpeed = 20;
let fallSpeed = 10;
let height = 0;
let jumping = false;
let falling = false;

// Monster spawn check
const spawned = []; // checks to see if a monster spawn has already been triggered
const onScreen = []; // array of monsters that should be on the screen

// Keyboard Controls
let leftPressed = false;
let rightPressed = false;
let upPressed = false;

// keyDownHandler(e);
// keyUpHandler(e);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d") {
    rightPressed = true;
    direction = "right";
  } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a") {
    leftPressed = true;
    direction = "left";
  } else if ((e.key === "Up" || e.key === "ArrowUp" || e.key === "w") && jumping === false && falling === false) {
    upPressed = true;
    // direction = "neutral";
  } else {
    console.log(e.key);
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a") {
    leftPressed = false;
  } else if (e.key === "Up" || e.key === "ArrowUp" || e.key === "w") {
    upPressed = false;
  }
}

// context, keyframe per 60 fps, display width, display height
let floortiles = new Environment(ctx, 4, 800, 200);
let mc = new Character(ctx, 4, 100, 100);

function runGame() {
  idleFrames++;
  if (idleFrames > 59) {
    idleFrames = idleFrames % 60;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // move stage progression
  if (rightPressed === true) {
    stageProgress += moveSpeed;
    onScreen.map(critter => {
      critter.xPos -= (critterArray[critter.critterId].moveSpeed);
    })
  } else if (leftPressed === true) {
    stageProgress -= moveSpeed;
    onScreen.map(critter => {
      critter.xPos += (critterArray[critter.critterId].moveSpeed);
    })
  }

  // Remove critters moved past

  onScreen.map(critter => {
    if (critter.xPos < -200) {
      onScreen.shift();
    }
  });

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

  // Checks to see if a monster should spawn
  if (checkSpawn(stageProgress) !== undefined && !spawned.includes(stageProgress)) {
    spawned.push(stageProgress);
    let critterId = checkSpawn(stageProgress);
    onScreen.push(
      {
        critterId: critterId,
        xPos : 850,
        yPos: 200 + (Math.random() * 100),
        size: { x1: 0, x2: critterArray[critterId].width, y1: 0, y2: critterArray[critterId].height}
      }
    );
  }

  // Checks to see if any monsters are on screen
  if (onScreen.length !== 0) {
    onScreen.map(critter => {
      generateCritter(ctx, critter, idleFrames)
    });
  };
  detectCollision(height, onScreen);
  requestAnimationFrame(runGame);
}

runGame();


