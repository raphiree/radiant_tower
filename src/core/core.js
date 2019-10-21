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