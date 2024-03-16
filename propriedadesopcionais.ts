interface Product {
    nome?: string;
}

const jogo:Product = {
    nome: "Ragnarok"
}
jogo.nome?.toUpperCase() // nome pode ou não ter e por isso ele sugere já o ? 