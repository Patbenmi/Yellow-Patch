// let anitaPettigrew;
let resetButton = document.getElementById("reset");

let gameBoard = document.getElementById("gameBoard");

gameBoard.setAttribute('width', getComputedStyle(gameBoard)["width"]);
gameBoard.setAttribute('height', getComputedStyle(gameBoard)["height"]);
let maxX = gameBoard.width
// console.log(maxX);
let maxY = gameBoard.height
// console.log(maxY);


const urgentWords = ["STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!", "WATCH THAT!!!", "NOT ON MY LAWN!!!", "DAGNABBIT!!!"];
const urgentWords2 = ["WATCH THAT!!!", "NOT ON MY LAWN!!!", "DAGNABBIT!!!", "STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!"];

let flashingMessage1 = document.getElementById("urgent1");
let flashingMessage2 = document.getElementById("urgent2");
let urineCount = document.getElementById("urine");
let scoreCount = document.getElementById("score");
let urineTotal = 0;
urineCount.innerText = urineTotal;
let scoreTotal = 0;
scoreCount.innerText = scoreTotal;

// console.log("Blue");

let context = gameBoard.getContext("2d")

function Creature(x, y, color, width, height) {
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

const changeWords = () => {
  let i = Math.floor((Math.random() * 5));
  flashingMessage1.innerText = urgentWords[i]; 
  flashingMessage2.innerText = urgentWords2[i];
}

setInterval(changeWords, 2000);

const gamePlay = () => {
  context.clearRect(0,0, gameBoard.width, gameBoard.height);
  anitaPettigrew.render();
  window.requestAnimationFrame(gamePlay)
}

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
}

function randomX() {
  return Math.floor(Math.random() * (maxX - 20));
}

function randomY() {
  return Math.floor(Math.random() * (maxY - 20));
}

const dogs = []

function generateDog () {
  let pomeranianX = randomX();
  let pomeranianY = randomY();
  const pom = new Creature(pomeranianX, pomeranianY, "orange", 20, 20);
  pom.render();
  dogs.push(pom);
  console.log(dogs);
  console.log(pomeranianX);
  console.log(pomeranianY);
  dogPee()
};

function dogPee() {
  setTimeout(function() {
    console.log(pomeranian);
    pomeranian.color = "yellow"; 
    urineTotal = urineTotal + 1;
    urineCount.innerText = urineTotal;
    generateDog();
  }, 5000);
}

function gameStart() {
  // document.addEventListener("DOMContentLoaded", function() {
    // console.log("DOMContentLoaded");
    anitaPettigrew = new Creature(20, 20, "white", 20, 20);
    generateDog();
    // dogPee();
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
    // changeWords();
    // }
  // )
};
gameStart();