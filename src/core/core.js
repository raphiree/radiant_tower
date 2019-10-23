export function updateRunTime(runTime) {
  let newRunTime;
  (runTime >= 59) ? newRunTime = 0 : newRunTime = runTime + 1
  return newRunTime;
}

export function updateStageProgress(keyPress, stageProgress, moveSpeed, gameMode) {
  let currentStageProgress = stageProgress;
  if (keyPress.leftPressed === true && stageProgress > 0) {
    currentStageProgress -= moveSpeed;
  } else if (keyPress.rightPressed === true) {
    if (gameMode.mode === 'tutorial' && stageProgress < 500) {
      currentStageProgress += moveSpeed;
    } else if (gameMode.mode !== 'tutorial'){
      currentStageProgress += moveSpeed;
    }
  }
  return currentStageProgress;
}

export function updateMCState(mainChar, mcState, keyPress) {
  let newState = mcState;
  newState.direction = keyPress.direction;

  if (newState.state === 'hit') {
    console.log('ohno');
  } else {
    // Attack Handler
    if (keyPress.mcAction === 'attacking' && newState.action === 'none') {
      newState.action = 'attacking';
      newState.recovery++;
    } else if (newState.action === 'attacking' && newState.recovery > 0) {
      newState.recovery++;
      if (newState.recovery >= 30) {newState.action = 'none', newState.recovery = 0}
    }

    // Jumping handler
    if (keyPress.mcState === 'jumping' && newState.height === 0) {
      newState.state = 'jumping';
      newState.height += mainChar.jumpSpeed;
    } else if (newState.state === 'jumping' && newState.height > 0) {
      (newState.height + mainChar.jumpSpeed > mainChar.maxJumpHeight ) ? newState.state = 'falling' : newState.height += mainChar.jumpSpeed; 
    } else if (newState.state === 'falling') {
      if (newState.height - mainChar.fallSpeed < 0) {
        newState.height = 0;
        newState.state = 'normal';
      } else {
        newState.height -= mainChar.fallSpeed;
      }
    }

  }
  return newState;
}

export function updateGameMode(gameMode, keyPress) {
  let newGameMode = gameMode;
  if (gameMode.mode === 'intro' && keyPress.upPressed) {
    newGameMode.mode = 'main';
    newGameMode.movement = 'fixed';
    return newGameMode;
  } else { return gameMode }
};