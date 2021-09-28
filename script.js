/*Sidny*/
const main = document.querySelector("main");
const startColumn = document.querySelector('#left');
const startGame = document.querySelector('#startGame');
const resetGame = document.querySelector('#reset');

const discs = document.querySelectorAll('div');
const stickerPos = document.querySelectorAll('section');
const playAgain = document.querySelectorAll('#winOrLose button');
const difficulty = document.querySelectorAll('#startGame button');
const playCounter = document.getElementById('contador')
const playQuantity = document.createElement('p')
let playTimes = 1;
let isSelected = false;
let startValue = 0;
console.log(resetGame)
difficulty.forEach(button => button.addEventListener("click", levelSelect))

function levelSelect(evt) {
    const discColors = ['green', 'red', 'yellow', 'blue', 'purple'];
    let discQuantity = 0;
    let diffButton = evt.target;

    diffButton.id == 'facil' ? discQuantity = 3 : diffButton.id == 'medio' ? discQuantity = 4 : discQuantity = 5
    diffButton.id == 'facil' ? playTimes = 50 : diffButton.id == 'medio' ? playTimes = 30 : playTimes = 50
    if (diffButton == evt.target) {
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

function endGameCondition() {
    if (playTimes == 40) {
        const win = document.getElementById('winning')
        win.style.display = "flex"
    } else if (playTimes <= 0) {
        const lose = document.getElementById('losing')
        lose.style.display = "flex"
    }
}
endGameCondition()
resetGame.addEventListener("click", reset)

function reset() {

    console.log('pegou')
    playTimes = startValue
    playQuantity.innerText = playTimes
}
/*Sidny*/


/*VAGNER*/

let select;
let disco;
let discoWidth;

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
        } else if (element.lastElementChild.clientWidth > discoWidth) {
            element.appendChild(select);
            select.style.marginBottom = 0;
            isSelected = false;
        } else if (element.lastElementChild.clientWidth < discoWidth) {
            select.style.marginBottom = 0;
            isSelected = false;
        } else if (element.lastElementChild.id === disco) {
            select.style.marginBottom = 0;
            isSelected = false;
        }
    }
}

stickerPos.forEach((sticker) =>
    sticker.addEventListener("click", moveDisc, true)
);
/*VAGNER*/

// main.addEventListener('click', teste)