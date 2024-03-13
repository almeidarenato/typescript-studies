function preencherDados(dados: 
    {
    nome: string, 
    precoDados: number,
    teclado: boolean
})
{
    document.body.innerHTML =`
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.precoDados}</p>
    <p>Inclui Teclado: ${dados.teclado }`
}

preencherDados({nome:"Computador"})