// Health Bar elements
const container = document.getElementById('healthBarContainer');

export function displayHealthBar (maxHealth) {
  for (let hearts = 0; hearts < maxHealth; hearts++) {
    let fullHeart = document.createElement('img');
    fullHeart.src = "assets/display/heart.png"; // 59 x 40
    fullHeart.classList.add('fullHealthBar');
    container.appendChild(fullHeart);
  }
};

export function takeDamage(damageTaken) {
  const currentHearts = document.getElementsByClassName('fullHealthBar');
  if (currentHearts.length !== 0) {
    for (let i = 0; i < damageTaken; i++) {
      console.log('it hits here')
      container.removeChild(currentHearts[i]);
      let emptyHeart = document.createElement('img');
      emptyHeart.src = "assets/display/empty.png"; // 59 x 40
      emptyHeart.classList.add('emptyHealthBar');
      container.appendChild(emptyHeart);
    }
  }
};