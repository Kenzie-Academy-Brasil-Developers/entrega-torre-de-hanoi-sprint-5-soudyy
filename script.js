/*Sidny*/
const discs = document.querySelectorAll('div');
const stickerPos = document.querySelectorAll('section')
let isSelected = false;
const main = document.querySelector("main")

console.log(main)

console.log(discs)


/*VAGNER*/

/*VAGNER*/

main.addEventListener('click', teste)

function teste(evt) {
    if (evt.target == stickerPos)
        console.log(evt.target)
}