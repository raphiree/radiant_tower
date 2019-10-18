import { equipmentArray } from './equipment_db';

export function detectCollision(height, onScreen) {
  const characterHurtBox = {
    x1: 180,
    x2: 224,
    y1: 386 - height,
    y2: 446 - height,
  }
  const modifier = 20;
  let beingHit = false;
  onScreen.forEach(critter => {
    let currentYPos = Math.sqrt((650 * 59) - (59 * critter.xPos)) + 180;
    if ( 
      (critter.xPos + critter.size.x1) + modifier < characterHurtBox.x2 && 
      (critter.xPos + critter.size.x2) - modifier > characterHurtBox.x1 &&
      (currentYPos + critter.size.y1) + modifier < characterHurtBox.y2 &&
      (currentYPos + critter.size.y2) - modifier > characterHurtBox.y1
      ) {
      beingHit = true;
    }
  })
  return beingHit;
}

export function detectHit(height, onScreen, equipment_id) {
  const equip = equipmentArray[equipment_id];
  const reach = equip.reach;
  const damage = equip.damage;
  
  const characterCenter = {
    x: 220,
    y: 396 - height,
  }

  const inReach = [];

  onScreen.map(critter => {
    let critterCenter = {
      x: (critter.size.x2 / 2) + critter.xPos,
      y: (critter.size.y2 / 2) + (Math.sqrt((650 * 59) - (59 * critter.xPos)) + 180),
    }
    
    let dx = (critterCenter.x - characterCenter.x);
    let dy = (critterCenter.y - characterCenter.y);

    if (reach + critter.hitbox > Math.sqrt(dx * dx + dy * dy)){
      inReach.push([critter.xPos, (Math.sqrt((650 * 59) - (59 * critter.xPos)) + 180), damage]);
    }
  })

  return inReach;
}

