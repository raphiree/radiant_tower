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

  render(gameMode, stageProgress, mcState) {
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
    let horizontalMovement = 0;
    if (gameMode.movement === 'free') {
      (stageProgress < 500) ? horizontalMovement = stageProgress : horizontalMovement = 500;
    }
    
    if (gameMode.mode !== 'intro') {
      this.ctx.drawImage(
        this.sprite, 
        spriteSheetXPos, spriteSheetRow, // start x, start y
        100, 100, // start width, start height 
        this.xPos + horizontalMovement, 
        this.yPos - mcState.height, // canvas position, x and y 
        100, 100 // canvas display width, height
      );
    }

  }

}

export default Character;