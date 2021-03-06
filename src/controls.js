export function Controls(stageProgress) {
  self = this;
  self.rightPressed = false;
  self.leftPressed = false;
  self.upPressed = false;
  self.fPressed = false;
  self.mcState =  'normal'; 
  self.mcAction = 'none';
  self.direction = 'neutral';
  self.restart = false;
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
  
  function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d") {
      self.rightPressed = true;
      self.direction = 'right';
    } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a") {
      self.leftPressed = true;
      self.direction = 'left';
    } else if (e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === " ") {
      self.upPressed = true;
      if (self.mcState === 'normal') { self.mcState = 'jumping'; }
    } else if (e.key === "f") {
      self.mcAction = 'attacking';
      self.fPressed = true;
    } else if (e.key === "Enter") {
      self.restart = true;
    }
  }
  
  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight" || e.key === "d") {
      self.rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft" || e.key === "a") {
      self.leftPressed = false;
    } else if (e.key === "Up" || e.key === "ArrowUp" || e.key === "w" || e.key === " ") {
      self.upPressed = false;
      self.mcState = 'normal';
    } else if (e.key === "f") {
      self.fPressed = false;
      self.mcAction = 'none';
    } else if (e.key === "Enter") {
      self.restart = false;
    }
  }
}