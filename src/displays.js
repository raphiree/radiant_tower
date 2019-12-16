export function displayHealthBar(ctx, currentHealth) {
  const healthbar = new Image();
  healthbar.src = "assets/display/healthbar.png";
  ctx.drawImage(
    healthbar,
    0, 0, // start x, start y
    800, 475, // start width, start height 
    0, 0, // canvas position, x and y 
    800, 475 // canvas display width, height
  )

  ctx.beginPath();
  ctx.rect(40, 40, currentHealth*3, 15);
  ctx.fillStyle = 'rgba(63, 191, 63, 1)';
  ctx.fill();
}

export function displayGameOver(ctx, runTime, highscore) {
  let opacity = runTime / 180;
  ctx.beginPath();
  ctx.rect(0, 0, 800, 500);
  ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
  ctx.fill();
  ctx.closePath();

  if (runTime === 60) {
    const rootDoc = document.getElementById('root');

    const gameText = document.createElement('h2');
    gameText.classList.add('gameover')
    const gameOverText = document.createTextNode('Game Over');
    gameText.appendChild(gameOverText);
    rootDoc.appendChild(gameText);

    const scoreTitle = document.createElement('h3');
    scoreTitle.classList.add('gameover')
    const scoreTitleText = document.createTextNode('High Scores');
    scoreTitle.appendChild(scoreTitleText);
    rootDoc.appendChild(scoreTitle);

    const restartText = document.createElement('h4');
    restartText.classList.add('gameover')
    const restartGameText = document.createTextNode('Press Enter to play again');
    restartText.appendChild(restartGameText);
    rootDoc.appendChild(restartText);

    const scoreList = document.createElement('ol');
    scoreList.classList.add('gameover')
    highscore.map((score, i) => {
      const scores = document.createElement('li');
      const scoreText = document.createTextNode(`${score}`);
      scores.appendChild(scoreText);
      scoreList.appendChild(scores);
    })

    rootDoc.appendChild(scoreList);
  }
}

export function removeGameover() {
  let toBeRemoved = document.getElementsByClassName('gameover');
  const rootDoc = document.getElementById('root');
  rootDoc.removeChild(toBeRemoved[3]);
  rootDoc.removeChild(toBeRemoved[2]);
  rootDoc.removeChild(toBeRemoved[1]);
  rootDoc.removeChild(toBeRemoved[0]);
}

export function displayScore(ctx, score) {
  ctx.save();
  ctx.font = "15px 'Press Start 2P'";
  ctx.fillStyle = 'white';
  ctx.lineWidth = 5;
  ctx.strokeText(`Score: ${score}`, 30, 85  )
  ctx.fillText(`Score: ${score}`, 30, 85  );
  ctx.restore();
}