/*Sidny*/
const discs = document.querySelectorAll('div');
const stickerPos = document.querySelectorAll('section')
const winningScreen = document.getElementById('winning')
const playAgain = document.querySelector('button')
let isSelected = false;
const main = document.querySelector("main")

console.log('quantidade: ', discs.childElementCount)
console.log(discs.length)


function winning() {

    winningScreen.style.display = "flex"
        // if (discs.childElementCount == 4) {
        //     console.log("win")
        // }
}
playAgain.addEventListener("click", restartGame)

function restartGame() {
    winningScreen.style.display = "none"
}
/*VAGNER*/

/*VAGNER*/