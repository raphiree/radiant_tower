import { environment } from './environment_db';

class Environment {
  constructor(location, ctx) {
    this.ctx = ctx;
    this.fps = environment[location].fps;
    this.width = environment[location].width;
    this.height = environment[location].height;
    this.background = new Image();
    this.background.src = environment[location].src;
  }
  
  render(stageProgress) {
    // for every 60 movement, background cycles 4 frames
    let currentFrame = (stageProgress) % 60;
    let frameStart = Math.floor(currentFrame / (60 / this.fps)) * this.width;

    // console.log(this.src);
    this.ctx.drawImage(this.background, frameStart, 0, this.width, this.height, 0, 0, this.width, this.height);
  }
}

export default Environment;