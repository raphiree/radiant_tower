class Equipment {
  constructor(ctx) {
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = "assets/equip/rusty_crowbar-2x.png";
  }

  render(stageProgress, mcState, direction, height, recovery, hitStun) {

    // Walking left and right
    let spriteRow;
    let frames;

    if (mcState === 'neutral') {
      frames = stageProgress % 240;
      if (direction === 'right') {
        spriteRow = 0;
      } else if (direction === 'left') {
        spriteRow = 100;
      } else {
        spriteRow = 0;
      }
    } else if (mcState === 'hit') {
      frames = hitStun * 4;
      spriteRow = 200;
    } else if (mcState === 'attacking') {
      frames = recovery * 8;
      if (direction === 'left') {
        spriteRow = 400;
      } else {
        spriteRow = 300;
      }
    }

    let charPos = Math.floor(frames / 60) * 100;
    this.ctx.drawImage(this.sprite, charPos, spriteRow, 100, 100, 170, 270 - height, 100, 100);

  }
}

export default Equipment;