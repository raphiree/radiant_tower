import { monsterArray } from './monster_db';

export function checkIfBeingHit(hero, heroState, monstersOnScreen, projectilesOnScreen, ctx) {
  let allHostiles = monstersOnScreen.concat(projectilesOnScreen);
  allHostiles.map(hostile => {
    if (hostile.type === 'projectile') {
      // console.log('pew pew');
    } else if (hostile.state !== 'dying') {
      const monster = monsterArray[hostile.type];
      monster.centerX = hostile.xPos + monster.radius;
      monster.centerY = hostile.yPos + monster.radius;
      
      const dx = Math.abs(hero.centerX - monster.centerX);
      const dy = Math.abs((hero.centerY - heroState.height) - monster.centerY);
      const distance = Math.sqrt((dx * dx) + (dy * dy));

      if (distance < (monster.radius + hero.radius)) {
        if (heroState.state === 'normal') {
          heroState.health -= monster.damage;
        }
        heroState.state = 'hit';
      }

      ctx.beginPath();
      ctx.arc(monster.centerX, monster.centerY, monster.radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(166, 32, 32, 0.6)';
      ctx.fill();
      ctx.stroke();
    }
  })
  return heroState;
}

export function checkIfHitting(hero, heroState, monstersOnScreen, ctx) {
  let newOnScreen = monstersOnScreen;
  if (heroState.action === 'attacking') {

    ctx.beginPath();
    ctx.arc(hero.centerX, hero.centerY - heroState.height + 14, hero.radius + 25, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(180, 191, 63, 0.6)';
    ctx.fill();
    ctx.stroke();

    newOnScreen.map(hostile => {
      const monster = monsterArray[hostile.type];
      monster.centerX = hostile.xPos + monster.radius;
      monster.centerY = hostile.yPos + monster.radius;
      
      const dx = Math.abs(hero.centerX - monster.centerX);
      const dy = Math.abs((hero.centerY - heroState.height + 14) - monster.centerY);
      const distance = Math.sqrt((dx * dx) + (dy * dy));

      if (distance < (monster.radius + hero.radius + 25)) {
        if (hostile.state === 'normal') {
          hostile.health -= heroState.damage;
          hostile.frame = 0;
          hostile.state = 'hit';
        }
      }
    })

  }
  return newOnScreen;
}