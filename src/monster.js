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

  render(ctx, runTime) {
    // let animationFrame = (Math.floor(runTime % 60 / 15)) * 50;
    // this.sprite.src = this.monster.property.src;
    // let dx = xPos;
    // let dy = yPos;
    // ctx.drawImage(
    //   this.sprite,
    //   animationFrame, 0, // start x, start y
    //   50, 50, // start width, start height 
    //   0 + dx,
    //   0 + dy, // canvas position, x and y 
    //   50, 50 // canvas display width, height
    // );
  }
}

// Spawns a new random monster at the given chance
export function spawnMonster(onScreen, stageProgress) {
const spawnRate = 100;
let newScreen = onScreen;
let monsterTypes = Object.keys(monsterArray).length;

  if ( stageProgress > 200
    && stageProgress % 200 === 0
    && Math.floor(Math.random()*100) < spawnRate ) {

    if (onScreen.length > 0) {
      if (onScreen[onScreen.length - 1].spawnId + 200 < stageProgress) {
        let monsterId = Math.floor(Math.random() * monsterTypes);
        let monster = monsterArray[monsterId];
          newScreen.push({
            spawnId: stageProgress,
            type: monsterId,
            xPos: 825,
            yPos: 325 - monster.height,
          })
      }
    } else {
      let monsterId = Math.floor(Math.random() * monsterTypes);
      let monster = monsterArray[monsterId];
        newScreen.push({
          spawnId: stageProgress,
          type: monsterId,
          xPos: 825,
          yPos: 325 - monster.height,
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
      if (keyPress.rightPressed) {
        monster.xPos -= moveSpeed;
        monster.xPos -= properties.moveSpeed;
      } else if (keyPress.leftPressed) {
        monster.xPos += moveSpeed;
        monster.xPos += properties.moveSpeed;
      }
      if (monster.xPos >= -250) {
        newScreen.push(monster);
      }
    })
  }
  return newScreen;
}

export function renderAllMonsters(ctx, onScreen, runTime) {
  // for (let i = 0; i < onScreen.length; i++) {
  //   let monster = new Monster(onScreen[i]);
  //   monster.render(ctx, runTime)
  // }
}