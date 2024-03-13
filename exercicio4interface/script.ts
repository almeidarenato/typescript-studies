
const apiUrl = 'https://api.origamid.dev/json/notebook.json'

interface Notebook {
    "nome": string
    "preco": number
    "descricao": string
    "garantia": string
    "seguroAcidentes": boolean
    "empresaFabricante": {
      "nome": string
      "fundacao": number
      "pais": string
    },
    "empresaMontadora": {
      "nome": string
      "fundacao": number
      "pais": string
    }
  }

const buscanotebook = async () =>{
     const foundNotebook = await (await fetch(apiUrl)).json()  
     showProduct(foundNotebook);
}

function showProduct(product: Notebook){
    document.body.innerHTML = 
     `<div>
     <h3>${product.nome}</h3>
     <h4>${product.empresaFabricante.nome} ,  ${product.empresaFabricante.pais},${product.empresaFabricante.fundacao},</h4>
     <p><strong>Preço:</strong>R$ ${product.preco}</p>
     <p><strong>Descrição:</strong>${product.descricao}</p>
     <p>Montadora: ${product.empresaMontadora.nome}, ${product.empresaMontadora.pais}, ${product.empresaMontadora.fundacao}</p>
     <p>Garantia: ${product.garantia}</p>
     <p>Possui seguro acidente? : ${product.seguroAcidentes ? "sim" : "não" }</p>
     </div>`
}

buscanotebook();