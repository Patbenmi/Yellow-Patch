let anitaPettigrew;

let gameBoard = document.getElementById("gameBoard");

gameBoard.setAttribute('width', getComputedStyle(gameBoard)["width"]);
gameBoard.setAttribute('height', getComputedStyle(gameBoard)["height"]);

const urgentWords = ["STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!", "WATCH THAT!!!", "NOT ON MY LAWN", "DAGNABBIT"];
const urgentWords2 = ["WATCH THAT!!!", "NOT ON MY LAWN", "DAGNABBIT", "STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!"];

let flashingMessage1 = document.getElementById("urgent1");
let flashingMessage2 = document.getElementById("urgent2");
let urineCount = document.getElementById("urine");
let scoreCount = document.getElementById("score");

let i = Math.floor((Math.random() * 5));

// flashingmessage1.innertext = urgentWords[i];
// flashingMessage2.innerText = urgentWords2[i];
console.log("Blue");

let context = gameBoard.getContext("2d")

function AnitaPettigrew(x, y, color, width, height) {
  this.win = false
  this.x = x
  this.y = y
  this.color = color
  this.width = width
  this.height = height
  this.render = function () {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
};
// let pomeranian = {
//   urine: false,
//   win: false,
//   x: 20,
//   y: 20,
//   color: "orange",
//   width: 20,
//   height: 20,
//   render: function() {
//     context.fillStyle = this.color;
//     context.fillRect(this.x, this.y, this.width, this.height);
//   }
// };

let gamePlay =() => {
  context.clearRect(0,0, gameBoard.width, gameBoard.height);
  anitaPettigrew.render();
  pomeranian.render();
  urineCount.innerText = 0;
  scoreCount.innerText = 0;
  flashingMessage1.innerText = urgentWords[i];
  flashingMessage2.innerText = urgentWords2[i];
  // if (urineCount < 3){
//     pomeranian.render();
    // console.log("Red");
  // }
  window.requestAnimationFrame(gamePlay)
};


function keypressHandler(key){
  switch(key) {
    case "ArrowUp": 
      anitaPettigrew.y -= 5;
      console.log("moveUp");
      break
    case "ArrowDown":
      anitaPettigrew.y += 5;
      console.log("moveDown");
      break
    case "ArrowLeft":
      anitaPettigrew.x -= 5;
      console.log("moveLeft");
      break
    case "ArrowRight":
      anitaPettigrew.x += 5;
      console.log("moveRight");
      break
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded");
  anitaPettigrew = new AnitaPettigrew(20, 20, "white", 20, 20);
  pomeranian = new AnitaPettigrew(100, 100, "orange", 20, 20);
  document.addEventListener("keydown", (event) => {
    console.log(event.code);
    keypressHandler(event.code);
  })
  gamePlay();
});

