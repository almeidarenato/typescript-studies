"use strict";
class Produto {
    nome; // defino a variável da classe
    constructor(nome) {
        this.nome = nome;
    }
}
const livro = new Produto('A guerra dos tronos');
console.log(livro);
console.log(livro instanceof Produto); // true pois é uma instancia de Produto
console.log(livro instanceof Array); //false
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca == 'O Hobbit') {
        return new Livro('O Hobbit', 'J. R. R. Tolkien');
    }
    if (busca == 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
    return null;
}
const novoProduto = buscarProduto('O Hobbit');
if (novoProduto instanceof Livro)
    console.log(novoProduto.autor); // após a verificação do instanceof o TS já aplica o autocomplete correto 
if (novoProduto instanceof Jogo)
    console.log(novoProduto.jogadores);
if (novoProduto instanceof Produto)
    console.log(novoProduto.nome); // mostra apenas a propriedade dentro de Produto
