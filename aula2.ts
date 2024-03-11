let produto: string = "Livro"
let preco: number = 200;

preco = 300

// anottations para Objeto
const carro:{
    marca: string;
    portas: number;
} = {
    marca: 'Audi',
    portas: 5
}

// inferencia - o ts consegue inferir o tipo de dado. dessa forma não é preciso
// definir oque é tipo de variável
// é uma boa prática não anotar nestes casos pois o ts já faz a inferencia
// exemplo:

let nome_livro = "titulo do livro" // o ts já inferiu que o tipo é string 
//nome_livro = 4 // apresenta erro por conta da inferencia

const barato= preco < 400 ? true : "produto caro" // ts já inferiu as possibilidades (passar o mouse em cima)

// para funções é necessário realizar a annotation 
// o modo strick não deixa usar valores que implicam "any"

function somarnumeros(a:number,b:number): number {
    return a+b
}
console.log(somarnumeros(10,20))


// funçoes que recebem objeto
const videogame = {
    nome: "nintendo",
    preco : "2000"
}
function transformarPreco(produto: {nome:string,preco:string}){
    produto.preco = 'R$ ' + produto.preco
    return produto
}

const produtoNovo = transformarPreco(videogame)
console.log(produtoNovo)