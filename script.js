let resetButton = document.getElementById("reset");
let gameStatus = document.getElementById("gameStatus")
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

function Creature(x, y, color, width, height,) { //readd image when updating image files.
  this.win = false
  this.x = x
  this.y = y
  this.color = color
  this.width = width
  this.height = height
  // this.image = image // embeded code for future image development.
  this.render = function () {
    // context.drawImage(this.image, this.x, this.y) // embeded code for future image development.
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
function gameStatusChange() {
  if(urineTotal === 1 && scoreTotal < 5) {
    gameStatus.innerText = "YOU'RE LOSING!!!";
  } else if(urineTotal <= 2 && (scoreTotal >= 3 && scoreTotal < 5)) {
    gameStatus.innerText = "I'm nervous...";
  } else if(urineTotal === 2 && scoreTotal < 5){
    gameStatus.innerText = "YOU'RE ABOUT TO LOSE!!!"
  } else if(scoreTotal >= 5 && scoreTotal <= 7) {
    gameStatus.innerText = "YOU'RE WINNING!!!";
  } else if(scoreTotal >= 8 && scoreTotal <=10){
    gameStatus.innerText = "ALMOST THERE!!!";
  } else if(scoreTotal === 10){
    gameStatus.innerText = "YOU WON!!!"
  };
}

function keypressHandler(key) {
  switch (key) {
    case "ArrowUp":
      anitaPettigrew.y -= 15;
      console.log(key);
      break
    case "ArrowDown":
      anitaPettigrew.y += 15;
      console.log(key);
      break
    case "ArrowLeft":
      anitaPettigrew.x -= 15;
      console.log(key);
      break
    case "ArrowRight":
      anitaPettigrew.x += 15;
      console.log(key);
      break
    case "Space":
      const dog = dogs[dogs.length - 1]
      if (anitaPettigrew.x + anitaPettigrew.width >= dog.x &&
        anitaPettigrew.x <= dog.x + dog.width &&
        anitaPettigrew.y <= dog.y + dog.height &&
        anitaPettigrew.y + anitaPettigrew.height >= dog.y && dog.color === "orange") {
        dogs.pop();
        scoreTotal++;
        scoreCount.innerText = scoreTotal;
        urineTotal = urineTotal - 1;
        gameStatusChange();
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
  gameStatusChange();
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
    urineCount.innerText = urineTotal;
    gameStatusChange();
    generateDog();
  }, 10000);
  urineTotal++;
  if(lossToDog === true || winAgainstDog === true) {
    clearTimeout(timeOut);
  };
}

function winPage() {
  location.replace("./win.html");
}

function losePage() {
  location.replace("./lose.html");
}

function winCondition() {
  if (urineTotal === 3) {
    console.log("You've lost!!!");
    lossToDog = true;
    losePage();
  } else if (scoreTotal === 10) {
    console.log("You've won!");
    winAgainstDog = true;
    winPage();
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
  if (anitaPettigrew.y > gameBoard.height - anitaPettigrew.height) {
    anitaPettigrew.y = gameBoard.height - anitaPettigrew.height;
  };
  if (anitaPettigrew.y < 0) {
    anitaPettigrew.y = 0;
  };
  if (anitaPettigrew.x > gameBoard.width - anitaPettigrew.width) {
    anitaPettigrew.x = gameBoard.width - anitaPettigrew.width;
  };
  if (anitaPettigrew.x < 0) {
    anitaPettigrew.x = 0;
  };
})

gameStart();
resetButton.addEventListener("click", gameStart);