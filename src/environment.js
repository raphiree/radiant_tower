class Environment {
  constructor(ctx, fps, displayWidth, displayHeight) {
    this.ctx = ctx;
    this.displayWidth = displayWidth;
    this.displayHeight = displayHeight;
    this.fps = fps;
    this.tileImage = new Image();
    this.tileImage.src = "assets/bg/stairs.png";
  }

  render (stageProgress) {
    let frames = (stageProgress / 1.5) % 60;
    let tilePos = Math.floor(frames * this.fps / 60) * 800;

    this.ctx.drawImage(this.tileImage, tilePos, 0, this.displayWidth, this.displayHeight, 0, 0, this.displayWidth, this.displayHeight);
  }

}

export default Environment;