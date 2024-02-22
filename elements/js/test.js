class game {
    constructor() {
        this.player = document.getElementById("palyer");
        this.ai = document.getElementById("ai");
        this.elementBtns = document.querySelectorAll(".elementBtns");
        this.gameBoard = document.getElementById("gameBoard");
        this.fire = document.getElementById("fireBtn");
        this.water = document.getElementById("waterBtn");
        this.lightning = document.getElementById("lightningBtn");
        this.air = document.getElementById("airBtn");
        this.earth = document.getElementById("earthBtn");
        
        this.gameText = document.querySelector(".gameText");
        
        this.elementType = [
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

        this.init();
    
        elementBtns.forEach(elementBtn => {
            elementBtn.addEventListener("click", e => {
                const chosenElement = elementBtn.dataset.selection
                const choices = elementType.find(choices => choices.name === chosenElement)
                elementChoice(choices)
                
            })
        });
    }
    
    
    function elementChoice(choices) {
        const computerSelection = computerChoice()
        const theWinner = winning(choices, computerSelection)
        const computer = winning(computerSelection, choices)
        
        result(computerSelection, computer)
        result(choices, theWinner)
    }
    
    fireCon(){
        if(player === ai) {
            gameText.innerText = "It's A Tie!"
        } else if (player === fire && ai === water) {
            gameText.innerText = "You Lose!"
        } else if (player === fire && ai === earth) {
            gameText.innerText = "You Win!"
        } else {
            gameText.innerText = "It's A Tie!"
        }
        
        console.log(score());
    }
    
    function result(choices, wins) {
        const div = document.createElement("div");
        gameBoard.innerText = choices.picture
        gameBoard.classList.add("outcome-choices")
        if(wins) div.classList.add("wins")
        gameBoard.after(gameBoard)
}

function winning(choices, opponent) {
    return choices.advantage === opponent.name
}

function computerChoice() {
    const computerRandom = Math.floor(Math.random() * elementType.length)
    return elementType[computerRandom];
}

}

const startGame = new game();