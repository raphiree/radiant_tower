# Radiant Tower

## Motivation & Background
Radiant Tower is a "hack & slash" side-scroller with the goal of climbing up a seemingly endless tower while defeating enemies
- The goal of the game is to progress through 100 (10?) levels of the tower while defeating enemies and gaining treasure.
- Side-scrollers are my favorite genre of games. Of particular note, [Cave Story](https://www.cavestory.org/) is a game that is dear to my heart, and I have long admired its creator for developing the entire game as a hobby through solo effort. In hopes that I might someday do the same, I decided to work on a side-scroller for my Javascript project.
- The name 'Radiant Tower' is a play on the game, 'Darkest Dungeon'. I hope to make an environment that is trecherous, but still bright and cheerful.

## Functions & Features

- Player will be greeted with a modal with a simple explanation of the game and its controls
- Player will press 'left'/'right' to navigate, 'd' or 'spacebar' to jump, and 'f' to use their weapon
- When hit by enemy projectiles or by enemies, player's HP bar will decrease
- When hitting enemies, they will take damage and be defeated when predetermined damage has been taken
- Of note is that the sprite itself will not change its x-position, the background does instead

## Proposed Layout
![image](https://i.imgur.com/ZSNmglH.png)

## Architecture and Technologies
- `Javascript` for game logic
- `Webkit` to bundle js files

## Implementation Timeline
### Day 1
1. Setting up - Node modules, Webpack
2. Study 2D HTML5 Breakout game tutorial
3. Minimal graphic work to create a simple staircase background & working sprites
4. Render background and sprite on the page
5. Movement in response to input

### Day 2
6. Jumping
7. Generate enemies procedurally
  - Enemies are randomly generated given movement
8. Enemy AI
9. Hitbox/collision
10. Enemy graphic work

### Day 3
11. Enemy projectiles
12. Health bar
13. Enemy-variation/Unique boss monster
14. Graphic work as needed

### Day 4
16. Design final boss
17. Design a reward page allowing player to input their name and high score
15. Design/CSS for presentation page

### Bonus
18. Enemies drop healing potions that fill the character's health bar
19. Enemies drop weapons that the player can equip with randomized stat
20. Enemies grow in strength as floor count increases
