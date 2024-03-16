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
    <div>${dado.nome}</div>
    
    `
})
}

buscaCursos()