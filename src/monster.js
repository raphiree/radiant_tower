import { monsterArray } from './monster_db';

export const onScreenHostiles = [];

class Monster {
  constructor(monster) {
    this.id = monster.spawnId;
    this.type = monster.type;
    this.xPos = monster.xPos;
    this.yPos = monster.yPos;
    this.sprite = new Image();
    this.sprite.src = monsterArray[monster.type].src;
  }

  render(ctx, runTime, toBeRendered) {
    let animationFrame;
    let spriteSheetRow;
    let dx = this.xPos;
    let dy = this.yPos;

    if (toBeRendered.state === 'hit') {
      animationFrame = (Math.floor(toBeRendered.frame % 60 / 15)) * 50;
      spriteSheetRow = 50;
      (toBeRendered.frame === 1) ? dx += 10 : dx;
    } else if (toBeRendered.state === 'normal') {
      animationFrame = (Math.floor(runTime % 60 / 15)) * 50;
      spriteSheetRow = 0;
    } else if (toBeRendered.state === 'attacking') {
      animationFrame = (Math.floor(runTime % 60 / 15)) * 50;
      spriteSheetRow = 150;
    } else if (toBeRendered.state === 'dying') {
      animationFrame = (Math.floor(runTime % 60 / 15)) * 50;
      spriteSheetRow = 100;
    }

    ctx.drawImage(
      this.sprite,
      animationFrame, spriteSheetRow, // start x, start y
      50, 50, // start width, start height 
      0 + dx,
      0 + dy, // canvas position, x and y 
      50, 50 // canvas display width, height
    );
  }
}

// Spawns a new random monster at the given chance
// Only creates and adds the initial monster, does not change values
export function spawnMonster(onScreen, stageProgress) {
const spawnRate = 100;
let newScreen = onScreen;
let monsterTypes = Object.keys(monsterArray).length;

  if ( stageProgress > 200
    && stageProgress % 200 === 0
    && Math.floor(Math.random()*100) < spawnRate ) {
    // let monsterId = Math.floor(Math.random() * monsterTypes);
    let monsterId = 0;
    let monster = monsterArray[monsterId];
    let yPos = monster.yPos

    if (onScreen.length > 0) {
      if (onScreen[onScreen.length - 1].spawnId + 200 < stageProgress) {
        let startFrame;
        (monsterId === 0) ? startFrame = 150 : startFrame = 0;
        newScreen.push({
          spawnId: stageProgress,
          type: monsterId,
          health: monster.health,
          xPos: 825,
          yPos: yPos,
          state: 'normal',
          frame: startFrame,
        })
      }
    } else {
        newScreen.push({
          spawnId: stageProgress,
          type: monsterId,
          health: monster.health,
          xPos: 825,
          yPos: yPos,
          state: 'normal',
          frame: 0,
        })
    }
  }
  return newScreen;
}

export function updateMonster (onScreen, keyPress, moveSpeed) {
  let newScreen = [];
  if (onScreen.length > 0) {
    onScreen.map(monster => {
      let properties = monsterArray[monster.type];
      (keyPress.rightPressed) ? monster.xPos -= moveSpeed : monster.xPos;
      (keyPress.leftPressed) ? monster.xPos += moveSpeed : monster.xPos;

      if (monster.state === 'hit') {
        if (monster.frame > 60) {
          monster.state = 'normal'
          monster.frame = 0;
        } else {
          monster.frame += 1;
        }
      }

      // Diving Bird
      if (monster.type === 1 && monster.xPos < 480) {
        monster.xPos -= 4;
        monster.yPos += 7;
      // Dropping Rock
      } else if (monster.type === 2) {
        if (monster.state === 'normal' && monster.xPos < 310) {
          monster.state = 'attacking';
        } else if (monster.state === 'attacking') {
          monster.yPos += 10;
        } else {
          monster.xPos -= properties.moveSpeed;
        }
      // Bullet Shooter
      } else if (monster.type === 0) {
        monster.frame += 1;
        if (monster.frame > 180 && monster.state === 'normal') {
          monster.state = 'attacking';
          monster.frame = 0;
        } else if (monster.state === 'attacking' && monster.frame >= 60) {
          monster.state = 'normal';
          monster.frame = 0;
        }
      // Others
      } else {
        monster.xPos -= properties.moveSpeed;
      }




      // Remove monsters out of bounds
      if (monster.xPos >= -250 && monster.state !== 'dead') {
        newScreen.push(monster);
      }

    })
  }
  return newScreen;
}

export function spawnProjectiles(onScreen, projectiles) {
  let newProjectiles = projectiles;
  onScreen.map(monster => {
    if (monster.type === 0 && monster.state === 'attacking' && monster.frame === 0) {
      let bullet = {
        type: 'projectile',
        xPos: monster.xPos,
        yPos: monster.yPos + 25,
      }
      newProjectiles.push(bullet);
    }
  })
  return newProjectiles;
}

export function renderAllMonsters(ctx, onScreen, runTime, heroState) {
  for (let i = 0; i < onScreen.length; i++) {
    let monster = new Monster(onScreen[i]);
    monster.render(ctx, runTime, onScreen[i])
  }
}