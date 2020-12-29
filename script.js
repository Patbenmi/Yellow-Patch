let gameBoard = document.getElementById("gameBoard");

gameBoard.setAttribute('width', getComputedStyle(gameBoard)["width"]);
gameBoard.setAttribute('height', getComputedStyle(gameBoard)["height"]);

const urgentWords = ["STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!", "WATCH THAT!!!", "NOT ON MY LAWN", "DAGNABBIT"];
const urgentWords2 = ["WATCH THAT!!!", "NOT ON MY LAWN", "DAGNABBIT", "STOP!!!", "GET OFF THE LAWN!!!", "DON'T DO THAT!!!"];


let flashingMessage1 = document.getElementById(urgent1);
let flashingMessage2 = document.getElementById(urgent2);

let i = Math.floor((Math.random() * 5));

// flashingmessage1.innertext = urgentWords[i];
// flashingMessage2.innerText = urgentWords2[i];
console.log("Blue");

