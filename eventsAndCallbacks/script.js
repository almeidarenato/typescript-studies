"use strict";
const buttonClick = document.querySelector('button');
function handleClick(event) {
    console.log(event.pageX);
}
function ativarMenu(event) {
    if (event instanceof MouseEvent)
        console.log(event.pageX);
    if (event instanceof TouchEvent)
        console.log(event.touches[0].pageX);
}
document.documentElement.addEventListener('mousedown', ativarMenu);
buttonClick?.addEventListener('pointerdown', handleClick);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener('scroll', handleScroll);
