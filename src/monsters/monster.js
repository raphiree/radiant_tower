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

  render(xPos, yPos, runTime) {
    let animationFrame = (Math.floor(runTime % 60 / 15)) * 50;
    this.sprite.src = this.monster.property.src;
    let dx = xPos;
    let dy = yPos;
    this.ctx.drawImage(
      this.sprite,
      animationFrame, 0, // start x, start y
      50, 50, // start width, start height 
      0 + dx,
      0 + dy, // canvas position, x and y 
      50, 50 // canvas display width, height
    );
  }
}

export function renderAllhostiles(ctx, onScreen, runTime) {
  for (let i = 0; i < onScreen.length; i++) {
    let hostile = new Monster(ctx, onScreen[i]);
    hostile.render(onScreen[i].xPos, onScreen[i].yPos, runTime)
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
  let newScreen = [];
  onScreen.map(monster => {
    if (monster.xPos >= -850) {
      newScreen.push(monster);
    }
  })
  if (newScreen !== undefined) {
    newScreen.map(monster => {
      if (keyPress.rightPressed) {
        monster.xPos -= moveSpeed;
      } else if (keyPress.leftPressed) {
        monster.xPos += moveSpeed;
      }
      if (monster.xPos > 200) {
        monster.yPos = Math.sqrt((650 * 59) - (59 * monster.xPos)) + 230
      }
    })  
  }
  return newScreen;
}