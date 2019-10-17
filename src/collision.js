export function detectCollision(height, onScreen) {
  const characterHurtBox = {
    x1: 180,
    x2: 224,
    y2: 370 - height,
    y1: 308 - height,
  }

  let beingHit = false;

  onScreen.forEach(critter => {
    if ( 
      (critter.xPos + critter.size.x1) < characterHurtBox.x2 && 
      (critter.xPos + critter.size.x2) > characterHurtBox.x1 &&
      (critter.yPos + critter.size.y1) < characterHurtBox.y2 &&
      (critter.yPos + critter.size.y2) > characterHurtBox.y1
      ) {
      beingHit = true;
    }
  })

  return beingHit;

}