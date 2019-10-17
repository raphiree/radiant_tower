import { critterArray } from './critter_db';
import { stage1 } from '../stage/1';

class Critter {
  constructor(ctx, critter) {
    this.critter = critterArray[critter.critterId];
    this.ctx = ctx;
    this.sprite = new Image();
    this.sprite.src = critterArray[critter.critterId].src;
    this.xPos = critter.xPos;
    this.yPos = critter.yPos;
  }

  render(critter, idleFrames) {
    let frames;
    let spriteRow;
    if (critter.critterState === 'neutral') {
      frames = idleFrames;
      spriteRow = 0;
    } else if (critter.critterState === 'hit') {
      frames = critter.critterHitstun;
      spriteRow = 100;
    }
    let spriteSheetXPos = Math.floor(frames / 15) * this.critter.width;
    this.ctx.drawImage(this.sprite, spriteSheetXPos, spriteRow, 100, 100, this.xPos, this.yPos, 100, 100);
  }
}

export function generateCritter(ctx, critter, idleFrames) {
  let spawn = new Critter(ctx, critter);
  spawn.render(critter, idleFrames);
}

export function checkSpawn(stageProgress) {
  if (stage1[stageProgress] !== undefined) {
    return stage1[stageProgress];
  }
}