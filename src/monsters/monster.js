import { monsterArray } from './monster_db';
import { spawnMap } from './spawnMap';

export const onScreenHostiles = [];

class Monster {
  constructor(ctx, monster) {
    this.ctx = ctx;
    this.sprite = new Image();
    this.monster = monster;
    this.xPos = monster.xPos;
    this.yPos = monster.yPos;
  }

  render(xPos, runTime, keyPress, moveSpeed) {
    let animationFrame = (Math.floor(runTime % 60 / 15)) * 50 + 50;
    this.sprite.src = this.monster.property.src;
    let dx = this.xPos;
    let dy = 0;
    this.ctx.drawImage(
      this.sprite,
      animationFrame, 0, // start x, start y
      50, 50, // start width, start height 
      650 + dx,
      200, // canvas position, x and y 
      50, 50 // canvas display width, height
    );
  }
}

export function renderAllhostiles(ctx, onScreen, runTime, stageProgress, keyPress, moveSpeed) {
  for (let i = 0; i < onScreen.length; i++) {
    let hostile = new Monster(ctx, onScreen[i]);
    hostile.render(onScreen[i].xPos, runTime, keyPress, moveSpeed)
  }
}

export function spawnMonster(onScreen, stageProgress) {
    // Spawns a new monster at 25% chance
  const spawnRate = 100;
  let newScreen = onScreen;

  if ( stageProgress > 200 
    && stageProgress % 200 === 0 
    && Math.floor(Math.random()*100) < spawnRate ) {
    let monsterId = Math.ceil(Math.random() * 1);
    let monster = monsterArray[monsterId];
    if (monster.spawn === "grounded") {
      newScreen.push({
        spawnId: stageProgress,
        property: monster,
        xPos: 650,
        yPos: 200,
      })
    }
  }
  return newScreen;
}

export function updateMonster (onScreen, keyPress, moveSpeed) {
  let newScreen = onScreen;
  if (newScreen !== undefined) {
    newScreen.map(monster => {
      if (keyPress.rightPressed) {
        monster.xPos -= moveSpeed;
      } else if (keyPress.leftPressed) {
        monster.xPos += moveSpeed;
      }
    })
  }
  return newScreen;
}