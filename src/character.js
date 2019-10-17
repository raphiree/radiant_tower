class Character {
  constructor(ctx) {
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = "assets/mc/mc-spritesheet-2x.png";
  }

  render(stageProgress, mcState, height, idleFrames) {

    // Walking left and right
    let spriteRow;
    let frames;
    
    if (mcState === 'right' || mcState === 'left' || mcState === 'neutral') {
      frames = stageProgress % 240;
      if (mcState === 'right') {
        spriteRow = 0;
      } else if (mcState === 'left') {
        spriteRow = 100;
      } else {
        spriteRow = 0;
      }
    } else if (mcState === 'hit') {
      frames = idleFrames * 4;
      spriteRow = 200;
    }

    let charPos = Math.floor(frames / 60) * 100;
    this.ctx.drawImage(this.sprite, charPos, spriteRow, 100, 100, 170, 270 - height, 100, 100);

  }
}

export default Character;