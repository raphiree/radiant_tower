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
  ctx.save();
  ctx.font = "15px 'Press Start 2P'";
  ctx.fillStyle = 'white';
  ctx.lineWidth = 5;
  ctx.strokeText(`Score: ${score}`, 30, 85  )
  ctx.fillText(`Score: ${score}`, 30, 85  );
  ctx.restore();
}