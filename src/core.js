import { monsterArray } from './monster_db';

export function updateStageProgress(keyPress, stageProgress, moveSpeed, heroState) {
  let currentStageProgress = stageProgress;
  if (keyPress.leftPressed === true && stageProgress > 0) {
    currentStageProgress -= moveSpeed;
  } else if (keyPress.rightPressed === true) {
    currentStageProgress += moveSpeed;
  }

  if (heroState.state === 'hit' && heroState.frame % 5 === 0) {
    currentStageProgress -= 1;
  }
  return currentStageProgress;
}

export function updateMCState(mainChar, mcState, keyPress) {
  let newState = mcState;
  newState.direction = keyPress.direction;
  if (newState.state === 'hit') {
    if (newState.hitstun >= 60) {
      newState.state = 'normal'
      newState.hitstun = 0;
    } else {
      newState.hitstun += 1;
      
    }
    if (newState.height - mainChar.fallSpeed < 0) {
      newState.height = 0;
    } else {
      newState.height -= mainChar.fallSpeed;
    }

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
    } else if (newState.state !== 'jumping') {
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

export function updateScore(score, monstersOnScreen) {
  let currentScore = score;
  monstersOnScreen.map(monster => {
    if (monster.state === 'dead' && monster.frame === 1) {
      currentScore += monsterArray[monster.type].points;
    }
  })
  return currentScore;
}

export function sortHighScore(score, highScore, runTime) {
  if (runTime === 1) {
    if (highScore.length < 5) {
      highScore.push(score);
    } else if (Math.min(...highScore) < score) {
      highScore.pop();
      highScore.push(score);;
    }
  }
  return highScore.sort(function(a, b){return b-a});
}