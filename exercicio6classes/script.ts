class Produto {
    nome: string; // defino a variável da classe
    preco: number;
    constructor(nome: string , preco:number){
        this.nome = nome
        this.preco = preco
    }
    precoReal(){
        return `R$ ${this.preco}`
    }
}

const livro = new Produto('A guerra dos tronos',200)

console.log(livro)
console.log(livro.precoReal())

console.log(livro instanceof Produto) // true pois é uma instancia de Produto
console.log(livro instanceof Array) //false

class Livro {
    autor: string;
    constructor(autor:string){
        this.autor = autor;
    }
}
class Jogo {
    jogadores: number;
    constructor(jogadores:number){
        this.jogadores = jogadores;
    }
}

function buscarProduto(busca: string){ // retorna Livro / Jogo ou Null
    if(busca == 'O Hobbit'){
        return new Livro('J. R. R. Tolkien')
    }
    if(busca == 'Dark Souls'){
        return new Jogo(1)
    }
    return null
}

const novoProduto: Livro | Jogo | null = buscarProduto('O Hobbit')

if(novoProduto instanceof Livro)
    console.log(novoProduto.autor) // após a verificação do instanceof o TS já aplica o autocomplete correto 

if(novoProduto instanceof Jogo)
    console.log(novoProduto.jogadores)