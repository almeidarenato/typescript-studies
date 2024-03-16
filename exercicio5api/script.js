"use strict";
const urlCursos = 'https://api.origamid.dev/json/cursos.json';
const buscaCursos = async () => {
    const listaCursos = await (await fetch(urlCursos)).json();
    showCursos(listaCursos);
};
function showCursos(dados) {
    dados.map(dado => {
        document.body.innerHTML += `
    <h2>${dado.nivel == 'iniciante' ? "<span style='color:blue'>" : "<span style='color:red'>"}  ${dado.nome}</span></h2>
    <div>Horas: ${dado.horas}</div>
    <div>Tags: <strong> ${dado.tags.join(", ")}</strong></div>
    <div>Aulas: <strong> ${dado.idAulas.join(" | ")}</strong></div>
    <div>Gratuítuo: <strong>${dado.gratuito == true ? "sim" : "não"}</strong></div>
    <div>Nível: ${dado.nivel}</div>
    </br>
    
    `;
    });
}
buscaCursos();
