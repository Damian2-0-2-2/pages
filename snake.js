const gameBoard = document.getElementById("game-board");
const snake = document.createElement("div");
snake.id = "snake";
gameBoard.appendChild(snake);

let x = 0;
let y = 0;

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: // left
      x -= 10;
      break;
    case 38: // up
      y -= 10;
      break;
    case 39: // right
      x += 10;
      break;
    case 40: // down
      y += 10;
      break;
  }
  snake.style.left = x + "px";
  snake.style.top = y + "px";
};
