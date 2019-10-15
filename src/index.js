import './sass/index.scss';

const root = document.getElementById('root-game');
const ctx = root.getContext("2d");

function drawStair() {
  ctx.clearRect(0, 0, root.width, root.height);

  const stairs = new Image();
  stairs.src = "assets/bg/bg_placeholder.png";

  let bgFrame = 0;
  if (Math.floor(mapPosition / 30) < 1) {
    bgFrame = 0;
  } else if (Math.floor(mapPosition / 30) < 2) {
    bgFrame = 1;
  } else {
    bgFrame = 2;
  }

  stairs.onload = () => {
    ctx.drawImage(stairs, bgFrame * 800, 0, 800, 475, 0, 0, 800, 475);
  }
}

let rightPressed = false;
let leftPressed = false;





let mapPosition = 0;

setInterval(() => {

  if (mapPosition >= 60) {
    mapPosition = 0;
  }
  mapPosition += 1
  drawStair();
  console.log(mapPosition);

}, 33);
