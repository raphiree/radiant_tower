import { environment } from './environment_db';

class Environment {
  constructor(location, ctx) {
    this.ctx = ctx;
    this.fps = environment[location].fps;
    this.width = environment[location].width;
    this.height = environment[location].height;
    this.background = new Image();
  }
  
  render(gameMode, stageProgress) {
    this.background.src = environment[gameMode.mode].src;
    let frameStart = 0;

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