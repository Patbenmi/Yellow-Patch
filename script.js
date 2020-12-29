let gameBoard = document.getElementById("gameBoard");

gameBoard.setAttribute('width', getComputedStyle(gameBoard)["width"]);
gameBoard.setAttribute('height', getComputedStyle(gameBoard)["height"]);

const urgentWords = ["STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!", "WATCH THAT!!!", "NOT ON MY LAWN", "DAGNABBIT"];
const urgentWords2 = ["WATCH THAT!!!", "NOT ON MY LAWN", "DAGNABBIT", "STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!"];


let flashingMessage1 = document.getElementById(urgent1);
let flashingMessage2 = document.getElementById(urgent2);
let urineCount = document.getElementById(urine);
let scoreCount = document.getElementById()

let i = Math.floor((Math.random() * 5));

// flashingmessage1.innertext = urgentWords[i];
// flashingMessage2.innerText = urgentWords2[i];
console.log("Blue");

let context = gameBoard.getContext("2d")

let anitaPettigrew = {
  win: false,
  x = 20,
  y = 20,
  color: "peach",
  width: 20,
  height: 20,
  render: function () {
    context.fillStyle = this.color;
    context.fillRect = (this.x, this.y, this.width, this.height);
  }
};
let pomeranian = {
  urine: false,
  win: false,
  x = 20,
  y = 20,
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
  urineCount.innerText = 0;
  scoreCount.innerText = 0;
  flashingMessage1.innerText = urgentWords[i];
  flashingMessage2.innerText = urgentWords2[i];
  if (urineCount < 3)
}
