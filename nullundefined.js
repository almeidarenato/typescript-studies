"use strict";
// null
const botao = document.querySelector('button');
botao?.setAttribute('id', 'teste'); // se for null ou undefined ele não executa
// também serv para undefined
// ou
if (botao !== null)
    botao.click();
// ou
if (botao) {
    botao.click();
}
// undefined
let totalizacao;
console.log(total); //undefined
function teste() { }
teste(); // undefined
console.log(typeof totalizacao); //undefined
if (totalizacao) { // irá retornar false
    console.log("total definido");
}
else {
    console.log("Total nao definido");
}
