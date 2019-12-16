function renderWall (ctx, stageProgress) {
  const wall = new Image();
  wall.width = 204;
  wall.height = 285;
  wall.src = "assets/bg/walls.png";
  wall.xPos = 0;
  
  const wallArray = [wall, wall, wall, wall, wall, wall, wall, wall];
  
  wallArray.map((section, i) => {
    section.xPos = section.width * i;
    section.xPos -= (stageProgress % 612) / 3;
    ctx.drawImage(
      section,
      0, 0, // start x, start y
      section.width, section.height, // start width, start height 
      section.xPos, 50, // canvas position, x and y 
      section.width, section.height // canvas display width, height
    )
  })
}

export function renderBackground(ctx, stageProgress) {
  renderWall(ctx, stageProgress);
}