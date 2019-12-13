import './sass/index.scss';

import * as Game from './core.js';
import { Controls } from './controls';
// import Environment from './environment';
import Hero from './hero';
import Equipment from './equipment';
import { spawnMonster, updateMonster, renderAllMonsters } from './monster';
// import { spawnMonster, updateMonster, monstersOnScreens } from './monster';

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

// let currentEnvironment = new Environment(ctx);

// Monsters objects being rendered
let monstersOnScreen = [];
let projectilesOnScreen = [];

// Current state of the main character being rendered
let hero = new Hero(ctx);
let weapon = new Equipment(ctx);
let heroState = {
  state: 'normal',
  action: 'none',
  direction: 'right',
  height: 0,
  hitstun: 0,
  recovery: 0,
};

function runGame () {
  // CLEAR SCREEN FOR REDRAWING
  ctx.clearRect(0, 0, 800, 475)

  // GAME VALUES UPDATE
  runTime += 1;
  stageProgress = Game.updateStageProgress(keyPress, stageProgress, moveSpeed);

  // GAME PROGRESS
  spawnMonster(monstersOnScreen, stageProgress);

  // SCREEN OBJECT VALUES UPDATE
  heroState = Game.updateMCState(hero, heroState, keyPress);
  monstersOnScreen = updateMonster(monstersOnScreen, keyPress, moveSpeed);

  // RENDERS
  hero.render(stageProgress, heroState);
  weapon.render(heroState, stageProgress, hero);
  renderAllMonsters(ctx, monstersOnScreen, runTime);

  // TEST LOGS
  // console.log(monstersOnScreen);

  // RUN GAME
  requestAnimationFrame(runGame);
}

runGame();