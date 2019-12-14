class Hero {
  constructor(ctx) {
    this.ctx = ctx;
    this.spritesheet = new Image();
    this.spritesheet.src = "assets/mc/mc-spritesheet-2x.png";
    this.xPos = 170;
    this.yPos = 325;
    this.centerX = 200;
    this.centerY = 375;
    this.radius = 28;
    this.spriteFrame = 0;
    this.fps = 4;
    this.maxJumpHeight = 200;
    this.jumpSpeed = 10;
    this.fallSpeed = 10;
    this.timer = 0;
  }

  render(stageProgress, heroState) {

    // Just to check hitbox
    this.ctx.beginPath();
    this.ctx.arc(this.centerX, this.centerY - heroState.height, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'rgba(46, 166, 32, 0.6)';
    this.ctx.fill();
    this.ctx.stroke();


    let spriteSheetRow; // multiples of 100
    let animationFrame;
    if (heroState.state !== 'hit' && heroState.action !== 'attacking') {
      animationFrame = stageProgress % 240;
      if (heroState.direction === 'left') {
        spriteSheetRow = 100;
      } else {
        spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here
      }
    } else if (heroState.action === 'attacking') {
      animationFrame = heroState.recovery * 8;
      if (heroState.direction === 'left') {
        spriteSheetRow = 400;
      } else {
        spriteSheetRow = 300;
      }
    }

    const spriteSheetXPos = Math.floor(animationFrame / 60) * 100
    let horizontalMovement = 0;
    this.ctx.drawImage(
      this.spritesheet,
      spriteSheetXPos, spriteSheetRow, // start x, start y
      100, 100, // start width, start height 
      this.xPos + horizontalMovement, 
      this.yPos - heroState.height, // canvas position, x and y 
      100, 100 // canvas display width, height
    );
  }
  
}

export default Hero;