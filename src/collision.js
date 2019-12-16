import { monsterArray } from './monster_db';

export function checkIfBeingHit(hero, heroState, monstersOnScreen, projectilesOnScreen, stageProgress) {
  let allHostiles = monstersOnScreen.concat(projectilesOnScreen);
  allHostiles.map(hostile => {
    if (hostile.type === 'projectile') {

      const bulletCenterX = hostile.xPos + 25;
      const bulletCenterY = hostile.yPos + 25;
      
      const dx = Math.abs(hero.centerX - bulletCenterX);
      const dy = Math.abs((hero.centerY - heroState.height) - bulletCenterY);
      const distance = Math.sqrt((dx * dx) + (dy * dy));

      if (distance < (hostile.radius + hero.radius)) {
        if (heroState.state === 'normal') {
          heroState.health -= 10;
        }
        heroState.state = 'hit';
      }

    } else if (hostile.state === 'normal' || hostile.state === 'attacking') {
      const monster = monsterArray[hostile.type];
      monster.centerX = hostile.xPos + monster.radius;
      monster.centerY = hostile.yPos + monster.radius;
      
      let damageModifier = (Math.floor(stageProgress / 2000));

      const dx = Math.abs(hero.centerX - monster.centerX);
      const dy = Math.abs((hero.centerY - heroState.height) - monster.centerY);
      const distance = Math.sqrt((dx * dx) + (dy * dy));

      if (distance < (monster.radius + hero.radius)) {
        if (heroState.state === 'normal') {
          heroState.health -= (monster.damage + damageModifier);
        }
        heroState.state = 'hit';
      }
      // DISPLAY HITBOX
      // ctx.beginPath();
      // ctx.arc(monster.centerX, monster.centerY, monster.radius, 0, 2 * Math.PI);
      // ctx.fillStyle = 'rgba(166, 32, 32, 0.6)';
      // ctx.fill();
    }
  })
  return heroState;
}

export function checkIfHitting(hero, heroState, monstersOnScreen, ctx) {
  let newOnScreen = monstersOnScreen;
  if (heroState.action === 'attacking') {

    // DISPLAY HURTBOX
    // ctx.beginPath();
    // ctx.arc(hero.centerX, hero.centerY - heroState.height + 14, hero.radius + 50, 0, 2 * Math.PI);
    // ctx.fillStyle = 'rgba(180, 191, 63, 0.6)';
    // ctx.fill();

    newOnScreen.map(hostile => {
      const monster = monsterArray[hostile.type];
      monster.centerX = hostile.xPos + monster.radius;
      monster.centerY = hostile.yPos + monster.radius;
      
      const dx = Math.abs(hero.centerX - monster.centerX);
      const dy = Math.abs((hero.centerY - heroState.height + 14) - monster.centerY);
      const distance = Math.sqrt((dx * dx) + (dy * dy));

      if (distance < (monster.radius + hero.radius + 40)) {
        if (hostile.state === 'normal' || hostile.state === 'attacking') {
          hostile.health -= heroState.damage;
          hostile.frame = 0;
          hostile.state = 'hit';
        }
      }
    })

  }
  return newOnScreen;
}