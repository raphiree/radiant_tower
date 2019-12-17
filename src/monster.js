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

let spawnSpacing = Math.ceil(Math.random() * (100 - (Math.floor(stageProgress / 2000))))

  if ( stageProgress > 200
    && stageProgress % spawnSpacing === 0
    && Math.floor(Math.random()*100) < spawnRate ) {
    let monsterId = Math.floor(Math.random() * monsterTypes);
    // let monsterId = 1;
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
          attackTime: 60,
          attackPoint: undefined,
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
        attackTime: 60,
        attackPoint: undefined,
      })
    }
  }
  return newScreen;
}

export function updateMonster (onScreen, keyPress, moveSpeed, heroState) {
  let newScreen = [];
  if (onScreen.length > 0) {
    onScreen.map(monster => {
      let properties = monsterArray[monster.type];
      (keyPress.rightPressed) ? monster.xPos -= moveSpeed : monster.xPos;
      (keyPress.leftPressed) ? monster.xPos += moveSpeed : monster.xPos;

      if (heroState.state === 'hit') {
        monster.xPos += 0.2;
      }

      if (monster.state === 'hit') {
        if (monster.frame > 60) {
          monster.state = 'normal'
          monster.frame = 0;
        } else {
          monster.frame += 1;
        }
      }

      // Diving Bird
      if (monster.type === 1) {
        if (monster.attackPoint === undefined) {
          monster.attackPoint = Math.random() * 350 + 400;
        } else if (monster.state === 'dying' || monster.state === 'hit') {
          monster.yPos += 10;
          monster.xPos += 2;
        } else {
          if (monster.state === 'normal' && monster.xPos < monster.attackPoint) {
            monster.state = 'attacking';
          } else if (monster.state === 'attacking') {
            const heroX = 200;
            const heroY = 375 - heroState.height;
            if (monster.attackTime > 0) {
              let xMove = Math.floor(Math.abs(monster.xPos - heroX) / monster.attackTime);
              let yMove = Math.floor(Math.abs(monster.yPos - heroY) / monster.attackTime);
              monster.xPos -= xMove;
              monster.yPos += yMove;  
              monster.attackTime -= 1
            } else {
              monster.xPos -= 5;
            }
          }
        }

      // Dropping Rock
      } else if (monster.type === 2) {
        if (monster.state === 'normal' && monster.xPos < 310) {
          monster.state = 'attacking';
        } else if (monster.state !== 'normal') {
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

      if (monster.health <= 0) {
        if (monster.state === 'normal' || monster.state === 'attacking') {
          if (monster.type === 0) {
            monster.state = 'dying';
          } else {
            monster.state = 'dead';
          }
          monster.frame = 0;
        } else if (monster.state === 'dying' && monster.frame > 60) {
          monster.state = 'dead';
          monster.frame = 0;
        } 
        monster.frame += 1;
      }

      // Remove monsters out of bounds
      if (monster.xPos >= -250) {
        if (monster.state !== 'dead') {
          newScreen.push(monster);
        } else if (monster.state === 'dead' && monster.frame < 60) {
          newScreen.push(monster);
        }
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
        yPos: monster.yPos,
        frame: 0,
        radius: 5,
      }
      newProjectiles.push(bullet);
    }
  })
  return newProjectiles;
}

export function updateProjectiles(projectilesOnScreen, keyPress, moveSpeed) {
  let newProjectiles = [];
  if (projectilesOnScreen.length > 0) {
    projectilesOnScreen.map(projectile => {
      (keyPress.rightPressed) ? projectile.xPos -= moveSpeed : projectile.xPos;
      (keyPress.leftPressed) ? projectile.xPos += moveSpeed : projectile.xPos;
      projectile.xPos -= 3;
      projectile.frame += 1;
      // Remove projectiles out of bounds
      if (projectile.xPos >= -100 && projectile.state !== 'dead') {
        newProjectiles.push(projectile);
      }

    })
  }
  return newProjectiles;
}

export function renderProjectiles(ctx, projectilesOnScreen) {
  let projectile = new Image();
  projectile.src = "assets/critters/projectile.png"

  projectilesOnScreen.map(bullet => {
    let startFrame = Math.floor((bullet.frame % 60 / 15)) * 50;
    ctx.drawImage(
      projectile,
      startFrame, 0, // start x, start y
      50, 50, // start width, start height 
      bullet.xPos,
      bullet.yPos, // canvas position, x and y 
      50, 50 // canvas display width, height
    );
  })

}

export function renderAllMonsters(ctx, onScreen, runTime, heroState) {
  for (let i = 0; i < onScreen.length; i++) {
    let monster = new Monster(onScreen[i]);
    monster.render(ctx, runTime, onScreen[i])
  }
}