"use strict";
const numeros = [10, 20, 30, 40, 50];
function maiorQue10(data) {
    data.filter(numero => numero > 10);
}
function mostraValores(data) {
    console.log(data);
}
console.log(maiorQue10(numeros));
const livros = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120]
];
