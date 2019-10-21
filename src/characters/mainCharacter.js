class Character {
  constructor(ctx) {
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = "assets/mc/mc-spritesheet-2x.png";
    this.xPos = 170;
    this.yPos = 350;
    this.spriteFrame = 0;
    this.fps = 4;
    this.maxJumpHeight = 200;
    this.jumpSpeed = 10;
    this.fallSpeed = 10;
    this.timer = 0;
  }

  render(stageProgress, mcState) {
    let spriteSheetRow; // multiples of 100
    let animationFrame = Math.floor((stageProgress % 240) / (240 / this.fps)) * 100;
    if (mcState.state = 'normal') {
      if (mcState.direction === 'left') {
        spriteSheetRow = 100;
      } else {
        spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here
      }
    // } else if (mcState.state = 'attacking') {
    //   if (mcState.direction === 'left') {
    //     spriteSheetRow = 200;
    //   } else {
    //     spriteSheetRow = 300; // make a new row for neutral state if time allows and edit it here
    //   }
    }

    this.ctx.drawImage(
      this.sprite, 
      animationFrame, spriteSheetRow, // start x, start y
      100, 100, // start width, start height 
      this.xPos, this.yPos - mcState.height, // canvas position, x and y 
      100, 100 // canvas display width, height
    );
  }

}

export default Character;