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