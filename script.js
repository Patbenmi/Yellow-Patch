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

function AnitaPettigrew() {
  this.win = false
  this.x = 20
  this.y = 20
  this.color = "yellow"
  this.width = 20
  this.height = 20
  this.render = function () {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
};
// let anitaPettigrew = {
//   win: false,
//   x: 20,
//   y: 20,
//   color: "yellow",
//   width: 20,
//   height: 20,
//   render: function () {
//     context.fillStyle = "yellow";
//     context.fillRect = (50, 50, 100, 100);
//   }
// };
let pomeranian = {
  urine: false,
  win: false,
  x: 20,
  y: 20,
  color: "orange",
  width: 20,
  height: 20,
  render: function() {
    context.fillStyle = this.color;
    context.fillStyle = (this.x, this.y, this.width, this.height);
  }
};

let gamePlay =() => {
  context.clearRect(0,0, gameBoard.width, gameBoard.height);
  anitaPettigrew.render();
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


function movementHandler(key){
  switch(key) {
    case "ArrowUp": console.log("moveUp");
    break
    case "ArrowDown": console.log("moveDown");
    break
    case "ArrowLeft": console.log("moveLeft");
    break
    case "ArrowRight": console.log("moveRight");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded");
  anitaPettigrew = new AnitaPettigrew();
  document.addEventListener("keydown", (event) => {
    console.log(event.code);
  })
  gamePlay();
});

