let anitaPettigrew;

let gameBoard = document.getElementById("gameBoard");

gameBoard.setAttribute('width', getComputedStyle(gameBoard)["width"]);
gameBoard.setAttribute('height', getComputedStyle(gameBoard)["height"]);

const urgentWords = ["STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!", "WATCH THAT!!!", "NOT ON MY LAWN!!!", "DAGNABBIT!!!"];
const urgentWords2 = ["WATCH THAT!!!", "NOT ON MY LAWN!!!", "DAGNABBIT!!!", "STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!"];

let flashingMessage1 = document.getElementById("urgent1");
let flashingMessage2 = document.getElementById("urgent2");
let urineCount = document.getElementById("urine");
let scoreCount = document.getElementById("score");

let i = Math.floor((Math.random() * 5));

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

let changeWords =() => {
  let i = Math.floor((Math.random() * 5));
  setInterval(function (){flashingMessage1.innerText = urgentWords[i]; }, 3000); 
  setInterval(function (){flashingMessage2.innerText = urgentWords2[i]; }, 2000);
};

setInterval(function () {changeWords(); }, 3000);

let gamePlay =() => {
  context.clearRect(0,0, gameBoard.width, gameBoard.height);
  anitaPettigrew.render();
  pomeranian.render();
  urineCount.innerText = "Urine Count: " + 0;
  scoreCount.innerText = "Dogs Removed: " + 0;
  window.requestAnimationFrame(gamePlay)
};
function keypressHandler(key){
  switch(key) {
    case "KeyH": 
      anitaPettigrew.y -= 15;
      console.log("moveUp");
      break
    case "KeyN":
      anitaPettigrew.y += 15;
      console.log("moveDown");
      break
    case "KeyB":
      anitaPettigrew.x -= 15;
      console.log("moveLeft");
      break
    case "KeyM":
      anitaPettigrew.x += 15;
      console.log("moveRight");
      break
  };
};
// function randomX() {
//   Math.floor((Math.random() * 800));
//   console.log(randomX());
// };
// function randomY() {
//   Math.floor((Math.random() * 374));
//   console.log(randomY);
// };

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMContentLoaded");
  anitaPettigrew = new AnitaPettigrew(20, 20, "white", 20, 20);
  pomeranian = new AnitaPettigrew(100, 150, "orange", 20, 20);
  document.addEventListener("keydown", (event) => {
    console.log(event.code);
    keypressHandler(event.code);
    console.log(anitaPettigrew.x);
    console.log(anitaPettigrew.y);
    if(anitaPettigrew.y > gameBoard.height-20){
      anitaPettigrew.y = gameBoard.height-20;
    };
    if(anitaPettigrew.y < 0) {
      anitaPettigrew.y = 0;
    };
    if(anitaPettigrew.x > gameBoard.width-20) {
      anitaPettigrew.x = gameBoard.width-20;
    };
    if(anitaPettigrew.x < 0) {
      anitaPettigrew.x = 0;
    };
  })
  gamePlay();
  changeWords();
});