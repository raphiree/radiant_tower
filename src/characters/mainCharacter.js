class Character {
  constructor(ctx) {
    this.ctx = ctx;
    this.state = 'normal';
    this.direction = 'right';
    this.sprite = new Image();
    this.sprite.src = "assets/mc/mc-spritesheet-2x.png";
    this.height = 0;
    this.xPos = 170;
    this.yPos = 350;
    this.spriteFrame = 0;
    this.fps = 4;
    this.maxJumpHeight = 200;
    this.jumpSpeed = 30;
  }

  render(stageProgress, direction) {
    let spriteSheetRow; // multiples of 100
    let animationFrame = Math.floor((stageProgress % 240) / (240 / this.fps)) * 100;

    if (this.state = 'normal') {
      if (direction === 'left') {
        spriteSheetRow = 100;
      } else {
        spriteSheetRow = 0; // make a new row for neutral state if time allows and edit it here
      }
    }

    this.ctx.drawImage(
      this.sprite, 
      animationFrame, spriteSheetRow, // start x, start y
      100, 100, // start width, start height 
      this.xPos, this.yPos - this.height, // canvas position, x and y 
      100, 100 // canvas display width, height
    );
  }

  jump (mcState, fallSpeed) {
    if (mcState === 'jumping' && this.state !== 'hit') {
      this.state = 'jumping'; 
    }
    if (this.state === 'jumping') {
      (this.height < this.maxJumpHeight) ? this.height += this.jumpSpeed : this.state = 'falling';
    }
    if (this.state === 'falling' && this.height >= 0) {
      ((this.height - fallSpeed) < 0) ? this.height = 0 : this.height -= fallSpeed;
    }
  }



}

export default Character;