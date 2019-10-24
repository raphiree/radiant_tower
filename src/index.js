import './sass/index.scss';

import Environment from './environment/environment';
import Character from './characters/mainCharacter';
import Equipment from './characters/equipment';
import { Controls } from './controls/controls';
import * as Core from './core/core.js';
import { displayTitle } from './display/title';
import { spawnMonster, updateMonster, renderAllhostiles } from './monsters/monster';

const rootDoc = document.getElementById('root');
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");

// BACKGROUND FUNCTIONS
const keyPress = new Controls();
// Keypress contains: right/left/up/f - Pressed booleans

// GAMEPLAY VARIABLES
let runTime = 0;
let score = 0;

// Current state of the game mode being rendered
let stageProgress = 0;
let moveSpeed = 5;
let gameMode = {
  mode: 'intro',
  movement: 'free',
}
let currentEnvironment = new Environment(gameMode.mode, ctx);

// Hostile objects being rendered
let onScreen = [];

// Current state of the main character being rendered
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

function runMainGame () {

  // TITLE SCREEN
  if (gameMode.mode === 'intro') {
    gameMode = Core.updateGameMode(gameMode, keyPress);
    displayTitle(gameMode, keyPress);
  }
  
  // GAME VALUES UPDATE
  runTime = Core.updateRunTime(runTime);
  stageProgress = Core.updateStageProgress(keyPress, stageProgress, moveSpeed, gameMode);
  
  // SCREEN OBJECT VALUES UPDATE
  mcState = Core.updateMCState(mainChar, mcState, keyPress);
  onScreen = spawnMonster(onScreen, stageProgress);
  onScreen = updateMonster(onScreen, keyPress, moveSpeed);

  // RENDERS
  currentEnvironment.render(gameMode, stageProgress);
  mainChar.render(gameMode, stageProgress, mcState);
  equipment.render(gameMode, mcState.equipment_id, mcState, stageProgress, mainChar);
  renderAllhostiles(ctx, onScreen, runTime, keyPress, moveSpeed)
  
  // TEST LOGS

  // RUN GAME
  requestAnimationFrame(runMainGame);
}

runMainGame();