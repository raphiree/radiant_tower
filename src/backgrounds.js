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

function renderFloor(ctx, stageProgress) {
  const floor = new Image();
  floor.src = "assets/bg/tiles2.png";
  let startPos = Math.floor((stageProgress % 4)) * 800;

  ctx.drawImage(
    floor,
    startPos, 0, // start x, start y
    800, 200, // start width, start height 
    0, 330, // canvas position, x and y 
    800, 200 // canvas display width, height
  )
}

function renderCeiling(ctx, stageProgress) {
  const ceiling = new Image();
  ceiling.src = "assets/bg/ceiling.png";
  let startPos = Math.floor((stageProgress % 52));

  ctx.drawImage(
    ceiling,
    startPos, 0, // start x, start y
    800, 52, // start width, start height 
    0, 0, // canvas position, x and y 
    800, 52 // canvas display width, height
  )

  ctx.drawImage(
    ceiling,
    startPos, 0, // start x, start y
    800, 52, // start width, start height 
    0, 459, // canvas position, x and y 
    800, 52 // canvas display width, height
  )
}

export function renderBackground(ctx, stageProgress) {
  renderWall(ctx, stageProgress);
  renderFloor(ctx, stageProgress);
  renderCeiling(ctx, stageProgress);
}