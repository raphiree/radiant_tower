class Environment {
  constructor(ctx) {
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = "assets/bg/hallway_tile_1.png"
  }
  
  render(stageProgress) {
    if (environment[gameMode.mode].movement === 'scrolling') {
      // for every 60 movement, background moves 30 pixels
      frameStart += 0.5*stageProgress
    } else if (environment[gameMode.mode].movement === 'fixed') {
      // for every 60 movement, background cycles 4 frames
      let currentFrame = (stageProgress) % 60;
      frameStart = Math.floor(currentFrame / (60 / this.fps)) * this.width;
    }
    this.ctx.drawImage(this.background, frameStart, 0, this.width, this.height, 0, 0, this.width, this.height);
  }
}

export default Environment;