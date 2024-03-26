"use strict";
const buttonClick = document.querySelector('.old');
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
// uso do this
function handleClickNew(event) {
    console.log(this); // necessário identificar o tipo do this para não gerar erro
    // o this pode ser o proprio objeto que chamou (onde ele foi chamado)
    // em outros momentos o this pode estar undefined
    // outra forma de lidar é console.log(event.currentTarget)
    // Instancias do tipo EventTarget não permitem interação do dom. 
    //É necessário usar o instanceof e identificar com o elemento desejado.
}
const buttonExample = document.querySelector('.new');
buttonExample?.addEventListener("click", handleClickNew);
