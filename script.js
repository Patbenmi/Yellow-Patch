let resetButton = document.getElementById("reset");

let gameBoard = document.getElementById("gameBoard");

gameBoard.setAttribute('width', getComputedStyle(gameBoard)["width"]);
gameBoard.setAttribute('height', getComputedStyle(gameBoard)["height"]);
let maxX = gameBoard.width
let maxY = gameBoard.height

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
const dogs = [];
let lossToDog = false;
let winAgainstDog = false;

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
}

const changeWords = () => {
  let i = Math.floor((Math.random() * 5));
  flashingMessage1.innerText = urgentWords[i];
  flashingMessage2.innerText = urgentWords2[i];
}

setInterval(changeWords, 2000);

const gamePlay = () => {
    context.clearRect(0, 0, gameBoard.width, gameBoard.height);
    anitaPettigrew.render();
    dogs.forEach(dog => {
      dog.render();
    });
    window.requestAnimationFrame(gamePlay)
}

function keypressHandler(key) {
  switch (key) {
    case "ArrowUp":
      anitaPettigrew.y -= 15;
      break
    case "ArrowDown":
      anitaPettigrew.y += 15;
      break
    case "ArrowLeft":
      anitaPettigrew.x -= 15;
      break
    case "ArrowRight":
      anitaPettigrew.x += 15;
      break
    case "Space":
      const dog = dogs[dogs.length - 1]
      console.log(dog)
      if (anitaPettigrew.x + anitaPettigrew.width > dog.x &&
        anitaPettigrew.x < dog.x + dog.width &&
        anitaPettigrew.y < dog.y + dog.height &&
        anitaPettigrew.y + anitaPettigrew.height > dog.y && dog.color === "orange") {
        dogs.pop();
        scoreTotal++;
        scoreCount.innerText = scoreTotal;
        urineTotal = urineTotal - 1;
      }
  };
}

function randomX() {
  return Math.floor(Math.random() * (maxX - 20));
}

function randomY() {
  return Math.floor(Math.random() * (maxY - 20));
}

function generateDog() {
  winCondition();
  if(lossToDog === false && winAgainstDog === false) {
    let pomeranianX = randomX();
    let pomeranianY = randomY();
    const pom = new Creature(pomeranianX, pomeranianY, "orange", 20, 20);
    dogs.push(pom);
    pom.render();
    dogPee(pom);
  };
}

function dogPee(pom) {
  let timeOut = setTimeout(function () {
    pom.color = "yellow";
    urineTotal++;
    urineCount.innerText = urineTotal;
    generateDog();
  }, 10000);
  if(lossToDog === true || winAgainstDog === true) {
    clearTimeout(timeOut);
  };
}

function winCondition() {
  if (urineTotal === 3) {
    console.log("You've lost!!!");
    lossToDog = true;
    console.log(lossToDog);

  } else if (scoreTotal === 10) {
    console.log("You've won!");
    winAgainstDog = true;

  };
}

function gameStart() {
  anitaPettigrew = new Creature(20, 20, "white", 20, 20);
  dogs.splice(0, dogs.length); //clears the array without deleting the array.
  scoreTotal = 0;
  urineTotal = 0;
  generateDog();
  gamePlay();
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  keypressHandler(event.code);
  if (anitaPettigrew.y > gameBoard.height - 20) {
    anitaPettigrew.y = gameBoard.height - 20;
  };
  if (anitaPettigrew.y < 0) {
    anitaPettigrew.y = 0;
  };
  if (anitaPettigrew.x > gameBoard.width - 20) {
    anitaPettigrew.x = gameBoard.width - 20;
  };
  if (anitaPettigrew.x < 0) {
    anitaPettigrew.x = 0;
  };
})

gameStart();
resetButton.addEventListener("click", gameStart);