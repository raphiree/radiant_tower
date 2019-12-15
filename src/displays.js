export function displayHealthBar(ctx, currentHealth) {
  ctx.beginPath();
  ctx.rect(40, 40, currentHealth*3, 15);
  ctx.fillStyle = 'rgba(63, 191, 63, 1)';
  ctx.fill();
}

export function displayGameOver(ctx, runTime, highscores) {
  let opacity = runTime / 180;
  ctx.beginPath();
  ctx.rect(0, 0, 800, 500);
  ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
  ctx.fill();

  if (runTime === 60) {
    const rootDoc = document.getElementById('root');
    const gameText = document.createElement('h2');
    const gameOverText = document.createTextNode('Game Over');
    gameText.appendChild(gameOverText);
    rootDoc.appendChild(gameText);
  }
}

export function displayScore(ctx, score) {
  ctx.font = "15px 'Press Start 2P'";
  ctx.fillStyle = 'black';
  ctx.fillText(`Score: ${score}`, 40, 80  );
}