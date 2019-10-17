import { equipmentArray } from './equipment_db';

export function detectCollision(height, onScreen) {
  const characterHurtBox = {
    x1: 180,
    x2: 224,
    y2: 370 - height,
    y1: 308 - height,
  }
  const modifier = 20;
  let beingHit = false;
  onScreen.forEach(critter => {
    if ( 
      (critter.xPos + critter.size.x1) + modifier < characterHurtBox.x2 && 
      (critter.xPos + critter.size.x2) - modifier > characterHurtBox.x1 &&
      (critter.yPos + critter.size.y1) + modifier < characterHurtBox.y2 &&
      (critter.yPos + critter.size.y2) - modifier > characterHurtBox.y1
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
    y: 320 - height,
  }

  const inReach = [];

  onScreen.map(critter => {
    let critterCenter = {
      x: (critter.size.x2 / 2) + critter.xPos,
      y: (critter.size.y2 / 2) + critter.yPos,
    }

    let dx = (critterCenter.x - characterCenter.x);
    let dy = (critterCenter.y - characterCenter.y);

    if (reach + critter.hitbox > Math.sqrt(dx * dx + dy * dy)){
      inReach.push([critter.xPos, critter.yPos, damage]);
    }
  })

  return inReach;
}

