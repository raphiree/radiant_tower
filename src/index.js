import './sass/index.scss';

import Environment from './environment/environment';
import Character from './hero';
import Equipment from './characters/equipment';
import { Controls } from './controls';
import * as Game from './core.js';
import { spawnMonster, updateMonster, monstersOnScreens } from './monsters/monster';

// GAMEPLAY VARIABLES
let runTime = 0;
let score = 0;
let maxHealth = 100;

// BACKGROUND FUNCTIONS
const keyPress = new Controls();
// keypress returns: 
//  rightPressed = true/false
//  leftPressed = true/false
//  upPressed = true/false
//  fPressed = true/false
//  mcState =  normal/jumping
//  mcAction = none/attacking
//  direction = neutral/right/left

// Current state of the game mode being rendered
let gameover = false;
let stageProgress = 0;
let moveSpeed = 5;

// SETUP
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");

// BACKGROUND
let currentEnvironment = new Environment(ctx);

// Monsters objects being rendered
let monstersOnScreen = [];
let projectilesOnScreen = [];

// Current state of the main character being rendered
let hero = new Hero(ctx);
let equipment = new Equipment(ctx);
let mcState = {
  state: 'normal',
  action: 'none',
  direction: 'right',
  height: 0,
  hitstun: 0,
  recovery: 0,
};

function runGame () {
  // GAME VALUES UPDATE

  runTime += 1;
  stageProgress = Game.updateStageProgress(keyPress, stageProgress, moveSpeed, gameMode);

  // SCREEN OBJECT VALUES UPDATE
  mcState = Game.updateMCState(mainChar, mcState, keyPress);
  monstersOnScreen = spawnMonster(monstersOnScreen, stageProgress);
  monstersOnScreen = updateMonster(monstersOnScreen, keyPress, moveSpeed);

  checkBeingHit(monstersOnScreen);

  // RENDERS
  currentEnvironment.render(gameMode, stageProgress);
  mainChar.render(gameMode, stageProgress, mcState);
  equipment.render(gameMode, mcState.equipment_id, mcState, stageProgress, mainChar);
  renderAllhostiles(ctx, monstersOnScreen, runTime)

  // TEST LOGS

  // RUN GAME
  requestAnimationFrame(runGame);
}

runGame();