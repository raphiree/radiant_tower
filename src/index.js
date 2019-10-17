import './sass/index.scss';
import Environment from './environment';
import Character from './character';
import { generateCritter, checkSpawn } from './critters/critter';
import { critterArray } from './critters/critter_db';
import { equipmentArray } from './equipment_db';
import { detectCollision, detectHit } from './collision';
import Equipment from './equipment';

const canvas = document.getElementById('root-game');
const ctx = canvas.getContext("2d");
let idleFrames = 0;

let stageProgress = 0;
const moveSpeed = 10;
let mcState = 'neutral';
let direction;
let healthBar = '100';
let maxJumpHeight = 200;
let jumpSpeed = 20;
let fallSpeed = 10;
let height = 0;
let jumping = false;
let falling = false;
let hitStun = 0; // returning to neutral from being hit
let recovery = 0; // attack animation & return to neutral timer

// Monster spawn check
const spawned = []; // checks to see if a monster spawn has already been triggered
const onScreen = []; // array of objects that should be on the screen
// onScreen includes: {
//   critterId: critterId,
//   critterState: 'neutral',
//     xPos: 850,
//     yPos: 200 + (Math.random() * 100),
//     size: { 
//       x1: 0, 
//       x2: critterArray[critterId].width, 
//       y1: 0, 
//       y2: critterArray[critterId].height }}
let beingHit = []; // contains xPos and yPos of the monster being hit


// Keyboard Controls
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let fPressed = false;

// keyDownHandler(e);
// keyUpHandler(e);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d") {
    rightPressed = true;
    if (mcState !== 'hit') { direction = "right"; }
  } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a") {
    leftPressed = true;
    if (mcState !== 'hit') { direction = "left"; }
  } else if ((e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === " ") && jumping === false && falling === false) {
    if (mcState !== 'hit') { upPressed = true; }
  } else if (e.key === "f") {
    if (mcState !== 'hit') { 
      fPressed = true;
      mcState = 'attacking'; 
    }
  } else {
    console.log(e.key);
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a") {
    leftPressed = false;
  } else if (e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === " ") {
    upPressed = false;
  } else if (e.key === "f") {
     fPressed = false 
  }
}

// context, keyframe per 60 fps, display width, display height
let floortiles = new Environment(ctx, 4, 800, 200);
let mc = new Character(ctx);
let crowbar = new Equipment(ctx);

function runGame() {
  idleFrames++;
  if (idleFrames > 59) {
    idleFrames = idleFrames % 60;
  }

  if (mcState === 'hit') {
    hitStun++;
    if (hitStun === 1 || hitStun === 29) {
      stageProgress -= 30;
      onScreen.map(critter => {
        critter.xPos += 30;
      });
    }
    if (hitStun >= 60) {
      mcState = 'neutral';
      hitStun = 0;
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // move stage progression
  if (rightPressed === true) {
    stageProgress += moveSpeed;
    onScreen.map(critter => {
      critter.xPos -= (critterArray[critter.critterId].moveSpeed);
    })
  } else if (leftPressed === true & stageProgress - moveSpeed > 0) {
    stageProgress -= moveSpeed;
    onScreen.map(critter => {
      critter.xPos += (critterArray[critter.critterId].moveSpeed);
    })
  }

  // attack state
  if (mcState === 'attacking') {
    recovery++;
    if (recovery >= 30) {
      mcState = 'neutral';
      recovery = 0;
    }
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

  // Checks to see if a monster should spawn
  if (checkSpawn(stageProgress) !== undefined && !spawned.includes(stageProgress)) {
    spawned.push(stageProgress);
    let critterId = checkSpawn(stageProgress);
    onScreen.push(
      {
        critterId: critterId,
        critterState: 'neutral',
        critterHealth: 10,
        critterHitstun: 0,
        xPos : 850,
        yPos: 200 + (Math.random() * 100),
        size: { x1: 0, x2: critterArray[critterId].width, y1: 0, y2: critterArray[critterId].height},
        hitbox: critterArray[critterId].hitbox
      }
    );
  }

  // Checks to see if any monsters are on screen
  if (onScreen.length !== 0) {
    onScreen.map(critter => {
      // Check to see if any of the monsters are being hit
      if (beingHit.length !== 0) {
        beingHit.map(coord => {
          if (coord[0] === critter.xPos && coord[1] === critter.yPos && critter.critterState !== 'hit') {
            critter.critterState = 'hit';
            critter.critterHealth -= coord[2]; // takes off critter HP
          }
        })
      }
      // Renders monsters
      generateCritter(ctx, critter, idleFrames)
      if (critter.critterState === 'hit') {
        critter.critterHitstun++;
        critter.xPos += 1;
        if (critter.critterHitstun >= 59) {
          critter.critterHitstun = 0;
          critter.critterState = 'neutral';
        }
      }

    });
  };

  // render main character
  mc.render(stageProgress, mcState, direction, height, recovery, hitStun);
  crowbar.render(stageProgress, mcState, direction, height, recovery, hitStun);

  
  if (detectCollision(height, onScreen) && mcState !== 'hit') {
    mcState = 'hit';
    healthBar -= 10;
    console.log('-10 HP')
  };

  if (mcState === 'attacking') {
    beingHit = detectHit(height, onScreen, 0)
  }

  requestAnimationFrame(runGame);

}

runGame();


