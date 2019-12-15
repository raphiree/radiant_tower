class Equipment {
  constructor(ctx) {
    this.ctx = ctx;
    this.sprite = new Image();
  }

  render(mcState, stageProgress, mainChar) {

    this.sprite.src = "assets/equip/rusty_crowbar-2x.png";
    let spriteSheetRow; // multiples of 100
    let animationFrame;
    if (mcState.state !== 'hit' && mcState.action !== 'attacking') {
      animationFrame = stageProgress % 240;
      if (mcState.direction === 'left') {
        spriteSheetRow = 100;
      } else {
        spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here
      }
    } else if (mcState.action === 'attacking') {
      animationFrame = mcState.recovery * 8;
      if (mcState.direction === 'left') {
        spriteSheetRow = 400;
      } else {
        spriteSheetRow = 300;
      }
    }

    const spriteSheetXPos = Math.floor(animationFrame / 60) * 100
    if (mcState.state !== 'hit') {
      this.ctx.drawImage(
        this.sprite,
        spriteSheetXPos, spriteSheetRow, // start x, start y
        100, 100, // start width, start height 
        mainChar.xPos,
        mainChar.yPos - mcState.height, // canvas position, x and y 
        100, 100 // canvas display width, height
      );
    }
  }
}

export default Equipment;