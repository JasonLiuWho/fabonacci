const yourScore = document.querySelector(".youScore");
const computerScore = document.querySelector(".computerScore");
const elementBtns = document.querySelectorAll(".elementBtns");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const winText = document.getElementById("winText");

let gameText = document.querySelector(".gameText");
let player;
let computer;
let result;
winText.innerText = "";


var elementType = [
    {
        name: "fire",
        picture: "🔥",
        advantage: "earth"
    },
    {
        name: "water",
        picture: "💧",
        advantage: "fire"
    },
    {
        name: "lightning",
        picture: "⚡",
        advantage: "water"
    },
    {
        name: "air",
        picture: "🌪️",
        advantage: "lightning"
    },
    {
        name: "earth",
        picture: "⛰️",
        advantage: "air"
    }
];

elementBtns.forEach(button => button.addEventListener("click", () => {

    player = button.innerText;

    computerChoice();

    playerText.innerText = `Player: ${player}`;
    computerText.innerText = `Computer: ${computer}`;
    winText.innerText = theWinner();
}));

function computerChoice() {
    const computerRandom  = Math.floor(Math.random() * elementType.length + 1);
    
    switch(computerRandom) {
        case 1:
            computer = "🔥"
            break;
        case 2:
            computer = "💧"
            break;
        case 3:
            computer = "⚡"
            break;
        case 4:
            computer = "🌪️"
            break;
        case 5:
            computer = "⛰️"
            break;
    }
}


function theWinner() {
    if(player === computer) {
        return "It's A Tie!";
    } else if(computer === "🔥" && player === "💧") {
        return "You Win!"
    } else if(computer === "🔥" && player == "⛰️") {
        return "You Lose!"
    } else if(computer === "💧" && player === "⚡") {
        return "You Win!"
    } else if(computer === "💧" && player === "🔥") {
        return "You Lose!"
    } else if(computer === "⚡" && player === "🌪️") {
        return "You Win!"
    } else if(computer === "⚡" && player === "💧") {
        return "You Lose!"
    } else if(computer === "🌪️" && player === "⛰️") {
        return "You Win!"
    } else if(computer === "🌪️" && player === "⚡") {
        return "You Lose!"
    } else if(computer === "⛰️" && player === "🔥") {
        return "You Win!"
    } else if(computer === "⛰️" && player === "🌪️") {
        return "You Lose!"
    } else {
        return "It's A Tie!"
    }
}
