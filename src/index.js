import './sass/index.scss';

import Environment from './environment/environment';
import Character from './characters/mainCharacter';
import { Controls } from './controls/controls';
import { updateRunTime, updateStageProgress } from './core/core.js';

const rootDoc = document.getElementById('root');
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");

// BACKGROUND FUNCTIONS
const keyPress = new Controls();
// Keypress contains: right/left/up/f - Pressed booleans

// GAMEPLAY VARIABLES
let runTime = 0;
let stageProgress = 0;
let moveSpeed = 5;
let fallSpeed = 10;

let currentEnvironment = new Environment('main', ctx);
let mainChar = new Character(ctx);

function runGame () {

  // GAME VALUES UPDATE
  runTime = updateRunTime(runTime);
  stageProgress = updateStageProgress(keyPress, stageProgress, moveSpeed);

  // RENDERS
  currentEnvironment.render(stageProgress);
  mainChar.render(stageProgress, keyPress.direction);

  // SCREEN OBJECT VALUES UPDATE
  mainChar.jump(keyPress.mcState, fallSpeed);
  requestAnimationFrame(runGame);
  console.log(mainChar.state);
}

runGame();
