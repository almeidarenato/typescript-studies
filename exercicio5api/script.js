"use strict";
const urlCursos = 'https://api.origamid.dev/json/cursos.json';
const buscaCursos = async () => {
    const listaCursos = await (await fetch(urlCursos)).json();
    showCursos(listaCursos);
};
function showCursos(dados) {
    dados.map(dado => {
        document.body.innerHTML += `
    <div>${dado.nome}</div>
    
    `;
    });
}
buscaCursos();
