/*Sidny*/
const discs = document.querySelectorAll('div');
const stickerPos = document.querySelectorAll('section')
let isSelected = false;
const main = document.querySelector("main")

// console.log(main)

// console.log(discs)


/*VAGNER*/
stickerPos.forEach(sticker => sticker.addEventListener("click", handlerClick, true));
let selectedElement; 

function handlerClick(evt) {
    let element = evt.currentTarget;

    // console.log(element);

    if (!isSelected && element.tagName === "SECTION" && element.hasChildNodes()){
        const disco = evt.currentTarget.lastElementChild.id
        const select = document.getElementById(disco);
        select.style.marginBottom = (20 + "px");
        isSelected = true;
        selectedElement = evt.currentTarget.lastElementChild.id;
    }
}
/*VAGNER*/

// main.addEventListener('click', teste)

function teste(evt) {
    if (evt.target == stickerPos)
        console.log(evt.target)
}