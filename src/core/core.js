export function updateRunTime(runTime) {
  let newRunTime;
  (runTime >= 59) ? newRunTime = 0 : newRunTime = runTime + 1
  return newRunTime;
}

export function updateStageProgress(keyPress, stageProgress, moveSpeed) {
  let currentStageProgress = stageProgress;
  if (keyPress.leftPressed === true && stageProgress > 0) {
    currentStageProgress -= moveSpeed;
  } else if (keyPress.rightPressed === true) {
    currentStageProgress += moveSpeed;
  }
  return currentStageProgress;
}

export function updateMCState(mainChar, mcState, keyPress) {
  let newState = mcState;
  newState.direction = keyPress.direction;

  if (mcState === 'hit') {
    console.log('ohno');
  } else {
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
    // if (keyPress.mcState === 'attacking') {
    //   newState.state = 'attacking';
    // }
  }
  return newState;
}