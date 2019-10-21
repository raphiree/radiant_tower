import './sass/index.scss';

import Environment from './environment/environment';
import Character from './characters/mainCharacter';
import Equipment from './characters/equipment';
import { Controls } from './controls/controls';
import { updateRunTime, updateStageProgress, updateMCState } from './core/core.js';

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
let currentEnvironment = new Environment('main', ctx);
let mainChar = new Character(ctx);
let equipment = new Equipment(ctx);
let mcState = {
  state: 'normal',
  action: 'none',
  direction: 'right',
  height: 0,
  hitstun: 0,
  recovery: 0,
  equipment_id: 0,
};

function runGame () {
  // GAME VALUES UPDATE
  runTime = updateRunTime(runTime);
  stageProgress = updateStageProgress(keyPress, stageProgress, moveSpeed);
  mcState = updateMCState(mainChar, mcState, keyPress);

  // RENDERS
  currentEnvironment.render(stageProgress);
  mainChar.render(stageProgress, mcState);
  equipment.render(mcState.equipment_id, mcState, stageProgress, mainChar);

  // SCREEN OBJECT VALUES UPDATE

  // TEST LOGS
  // console.log(mcState);

  // RUN GAME
  requestAnimationFrame(runGame);
}

runGame();
