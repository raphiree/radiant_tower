import './sass/index.scss';
import * as Game from './core.js';
import { Controls } from './controls';
import { renderBackground } from './backgrounds';
import Hero from './hero';
import Equipment from './equipment';
import { 
  spawnMonster, 
  updateMonster, 
  renderAllMonsters, 
  spawnProjectiles,
  updateProjectiles,
  renderProjectiles,
} from './monster';
import { checkIfBeingHit, checkIfHitting } from './collision';
import { displayHealthBar, displayGameOver, displayScore, removeGameover } from './displays';
import { modal } from './modal';

// GAMEPLAY VARIABLES
let runTime = 0;
let maxHealth = 100;
let score = 0;
let highScore = [0,0,0,0,0];

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
  health: maxHealth,
  state: 'normal',
  action: 'none',
  direction: 'right',
  height: 0,
  hitstun: 0,
  recovery: 0,
  damage: 5,
};

function runGame () {
  if (gameover === false) {
    // CLEAR SCREEN FOR REDRAWING
    ctx.clearRect(0, 0, 800, 475)

    // GAME VALUES UPDATE
    runTime += 1;
    stageProgress = Game.updateStageProgress(keyPress, stageProgress, moveSpeed, heroState);

    // SETUP GAME VALUES/ENVIRONMENT
    renderBackground(ctx, stageProgress);

    // GAME PROGRESS
    spawnMonster(monstersOnScreen, stageProgress);
    spawnProjectiles(monstersOnScreen, projectilesOnScreen);

    // SCREEN OBJECT VALUES UPDATE
    score = Game.updateScore(score, monstersOnScreen);
    heroState = Game.updateMCState(hero, heroState, keyPress);
    monstersOnScreen = updateMonster(monstersOnScreen, keyPress, moveSpeed, heroState);
    projectilesOnScreen = updateProjectiles(projectilesOnScreen, keyPress, moveSpeed);

    // CHECK CONDITIONS
    monstersOnScreen = checkIfHitting(hero, heroState, monstersOnScreen, ctx);
    heroState = checkIfBeingHit(hero, heroState, monstersOnScreen, projectilesOnScreen, stageProgress);

    // RENDERS
    displayHealthBar(ctx, heroState.health);
    displayScore(ctx, score);
    hero.render(stageProgress, heroState);
    weapon.render(heroState, stageProgress, hero);
    renderAllMonsters(ctx, monstersOnScreen, runTime);
    renderProjectiles(ctx, projectilesOnScreen);

    // CHECK IF GAME OVER
    if (heroState.health <= 0) { gameover = true; runTime = 0; }

    // TEST LOGS

    // RUN GAME
  } else {
    Game.sortHighScore(score, highScore, runTime);
    displayGameOver(ctx, runTime, highScore);
    runTime += 1;

    if (keyPress.restart === true) {
      gameover = false;
      runTime = 0;
      heroState = {
        health: maxHealth,
        state: 'normal',
        action: 'none',
        direction: 'right',
        height: 0,
        hitstun: 0,
        recovery: 0,
        damage: 5,
      };
      score = 0;
      stageProgress = 0;
      monstersOnScreen = [];
      projectilesOnScreen = [];
      removeGameover();
    };
  }
  requestAnimationFrame(runGame);
}

modal();
runGame();