"use strict";
function preencherDados(dados) {
    document.body.innerHTML = `
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.precoDados}</p>
    <p>Inclui Teclado: ${dados.teclado ? "sim" : "não"}</p>`;
}
preencherDados({ nome: "Computador", precoDados: 2000, teclado: true });
