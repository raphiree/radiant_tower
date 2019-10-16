class Character {
  constructor(ctx, fps, displayWidth, displayHeight) {
    this.ctx = ctx;
    this.displayWidth = displayWidth;
    this.displayHeight = displayHeight;
    this.fps = fps;
    this.sprite = new Image();
    this.sprite.src = "assets/mc/mc-spritesheet-2x.png";
  }

  render(stageProgress, direction, height) {

    // Walking left and right
    let frames = stageProgress % 240;
    let charPos = Math.floor(frames * this.fps / 240) * this.displayWidth;
    let spriteRow;
    if (direction === 'right') {
      spriteRow = 0;
    } else if (direction === 'left') {
      spriteRow = 100;
    } else {
      spriteRow = 0;
    }

    this.ctx.drawImage(this.sprite, charPos, spriteRow, this.displayWidth, this.displayHeight, 170, 270 - height, this.displayWidth, this.displayHeight);
  }

}

export default Character;