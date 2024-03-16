const urlCursos = 'https://api.origamid.dev/json/cursos.json'



interface Curso {
    "nome": string,
    "horas": number,
    "aulas": number,
    "gratuito": boolean,
    "tags": Array<string>,
    "idAulas": Array<number>
    "nivel": string
}

type Cursos = Array<Curso>

const buscaCursos = async ()=> {
const listaCursos: Cursos = await (await fetch(urlCursos)).json();
showCursos(listaCursos)

}

function showCursos(dados:Cursos){
dados.map(dado =>{
    document.body.innerHTML +=`
    <div>${dado.nivel == 'iniciante' ? "<span style='color:blue'>" :"<span style='color:red'>"}  ${dado.nome}</span></div>
    <div>Horas: ${dado.horas}</div>
    <div>Tags: <strong> ${dado.tags.map(tag=> tag)}</strong></div>
    <div>Aulas: <strong> ${dado.idAulas.map(idAula=> idAula)}</strong></div>
    <div>Gratuítuo: <strong>${dado.gratuito==true?"sim":"não"}</strong></div>
    <div>Nível: ${dado.nivel}</div>
    </br>
    
    `
})
}

buscaCursos()