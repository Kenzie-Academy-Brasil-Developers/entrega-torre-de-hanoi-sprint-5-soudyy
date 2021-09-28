/*Sidny*/
const discs = document.querySelectorAll("div");
const stickerPos = document.querySelectorAll("section");
const winningScreen = document.getElementById("winning");
const playAgain = document.querySelector("button");
let isSelected = false;
const main = document.querySelector("main");

// console.log(main)

// console.log(discs)

function winning() {
  winningScreen.style.display = "flex";
}

playAgain.addEventListener("click", restartGame);

function restartGame() {
  winningScreen.style.display = "none";
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
