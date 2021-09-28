const startColumn = document.querySelector('#left');
const endColumn = document.querySelector('#right');
const startGame = document.querySelector('#startGame');
const resetGame = document.querySelector('#reset');
const divPosition = document.querySelector('#winOrLose');

const discs = document.querySelectorAll('div');
const stickPosition = document.querySelectorAll('section');
const playAgain = document.querySelectorAll('#winOrLose button');
const difficulty = document.querySelectorAll('#startGame button');
const gameState = document.createElement('div')
const playCounter = document.getElementById('contador')
const playQuantity = document.createElement('p')
let playTimes = 1;
let startValue = 0;
let discQuantity = 0;
let isSelected = false;

difficulty.forEach(button => button.addEventListener("click", levelSelect))
const discColors = ['green', 'red', 'yellow', 'blue', 'purple'];
divPosition.appendChild(gameState)
    //Seleção de dificuldade de jogo
function levelSelect(evt) {

    stickPosition.forEach(stick => stick.id === "left" || stick.id === "middle" || stick.id === "right" ? stick.innerHTML = '' : false)
    let diffButton = evt.target;

    diffButton.id === 'facil' ? discQuantity = 3 : diffButton.id === 'medio' ? discQuantity = 4 : discQuantity = 5
    diffButton.id === 'facil' ? playTimes = 20 : diffButton.id === 'medio' ? playTimes = 25 : playTimes = 50
    if (diffButton === evt.target) {
        startGame.style.display = "none";
        playCounter.style.display = "flex"
        playQuantity.innerText = playTimes
        playCounter.appendChild(playQuantity)
        startValue = playTimes
        for (let i = discQuantity; i > 0; i--) {
            const createDiscs = document.createElement('div');
            createDiscs.id = discColors[i - 1];
            startColumn.appendChild(createDiscs);
        }
    }

}
//Reinicia o jogo
playAgain.forEach(button => button.addEventListener('click', restartGame))
const win = document.getElementById('winning')
const lose = document.getElementById('losing')

function restartGame() {

    playCounter.style.display = "none"
    win.style.display = "none"
    lose.style.display = "none"
    startGame.style.display = "flex";
    reset();


}
//Condições de vitoria ou derrota
function endGameCondition() {
    if (endColumn.childElementCount === discQuantity) {
        victory = true
        win.style.display = "flex"
    } else if (playTimes === 0) {
        lose.style.display = "flex"
    }

}

resetGame.addEventListener("click", reset)

//Reseta o jogo atual
function reset() {
    for (let i = discQuantity; i > 0; i--) {
        const createDiscs = document.getElementById(discColors[i - 1]);
        startColumn.appendChild(createDiscs);
    }
    playTimes = startValue
    playQuantity.innerText = playTimes
}


let select; //captura o ID do disco
let disco; //captura o ultimo elemento da section
let discoWidth; //captura o tamanho do disco 

//Movimenta as peças
function moveDisc(evt) {
    let element = evt.currentTarget;

    if (!isSelected && element.tagName === "SECTION" && element.hasChildNodes() && element.lastElementChild !== null) {
        disco = element.lastElementChild.id;
        discoWidth = element.lastElementChild.clientWidth;
        select = document.getElementById(disco);
        select.style.marginBottom = 20 + "px";
        isSelected = true;
    } else if (isSelected && element.tagName === "SECTION") {
        if (!element.hasChildNodes() || element.lastElementChild === null) {
            element.appendChild(select);
            select.style.marginBottom = 0;
            isSelected = false;
            playTimes--
            playQuantity.innerText = playTimes
        } else if (element.lastElementChild.clientWidth > discoWidth) {
            element.appendChild(select);
            select.style.marginBottom = 0;
            isSelected = false;
            playTimes--
            playQuantity.innerText = playTimes
        } else if (element.lastElementChild.clientWidth < discoWidth) {
            select.style.marginBottom = 0;
            isSelected = false;
        } else if (element.lastElementChild.id === disco) {
            select.style.marginBottom = 0;
            isSelected = false;
        }
    }
    endGameCondition()
}

stickPosition.forEach((stick) => {
    if (stick.id === "left" || stick.id === "middle" || stick.id === "right") {
        stick.addEventListener("click", moveDisc, true);
    }
});