Types - Definimos oque podemos fazer com o tipo de dado

## TS-Check

Ao adicionar o ts-check o editor passará a indicar erros.
Ele ainda vai permitir salvar , mas vai avisar.

```js
//@ts-check
```

## Type Annotations

O javascript não possui uma forma de indicarmos o tipo das variáveis.
Um exemplo muito comum é o caso de funções onde são solicitados valores/argumentos.

Existe uma proposta que ainda não foi implementada, que implementa essas tipagens.
https://github.com/tc39/proposal-type-annotations/

## Typescript

Permite indicar os tipos das variáveis
Evita erros que só podem ser vistos após a execução do código.
Evita uso de forma errada dos dados (soma de string com números por exemplo)
Resolve o problema de DX - Developer Experience, ao trazer o autocomplete de acordo com o tipo de variável

## Comando

Compila um arquivo typescript em javascript

```bash
    tsc script.ts
```

## TSCONFIG

Cria arquivo de configurações do typescript (tsconfig.json)

```bash
    tsc --init
```

Com o arquivo criado basta usar o comando "tsc" no terminal para compilar todos os arquivos para js

### Tsc Watch

Automaticamente a qualquer mudança ele recompila os arquivos usando
o -w (watch)

```bash
    tsc -w
```

### Tipos Primitivos do Typescript

- string
- number
- boolean

Não confundir com String, Number ou Boolean que são construtores de classe que
criam objetos
exemplo:
const numero = new Number(8)

### Union Types

É comum funções receber diferentes tipos de dados
exemplo

```ts
let total: string | number = 200; // total pode receber string ou number
```

### Optional Chaining

Elementos do DOM sempre podem retornar o elemento OU nulo
Isso acarreta em problemas caso não seja verificado se o elemento capturado existe.
Uma forma de evitar o problema é adicionando o Optional Chaining com o "?."

```ts
const button = document.querySelector("button");
button?.click(); // optional chaining. Apenas executa se for diferente de null
// ou diferente de undefined
```

## type

Cria um atalho (alias ) para um tipo customizado

exemplo:

```ts
type NumberOrString = number | string;

let total: NumberOrString = 10; // este tipo aceita numero ou string
```

## Interface

Funciona bem similar ao type porém possui mais utilizações e possui
uma sintaxe um pouco diferente . É recomendado o uso de Interface para objetos.

```ts
    // criação de interface
    interface InterfaceProduto {
        nome: string;
        preco: number:
        teclado: boolean
    }

     // criação de type
    type TypeProduto = {
        nome: string;
        preco: number:
        teclado: boolean
    }


```

## Usos do Any Implícito

o indicado para o uso do any é apenas para retornos para retornos do quando há o uso do json()

exemplo

```js
const data = await response.json(); // data é um elemento do tipo Any implicito
```

## Null

Tipo primitivo . Representa a ausencia devalor.
Comum a ocorrência em funções que fazem busca no DOM quando não bem sucedidas ou
localstorage

```js
    const button = document.querySelector('button');

```

## Undefined

Undefined representa variáveis/propriedades que foram instanciadas 
porém seus valores não foram definidos
Undefined é diferente de null.

```js
    let total;
    console.log(total) //undefined

    const data = {};
    console.log(data.nome) //undefined
```

## Propriedades Opcionais

Podemos definir propriedades opcionais na interface ```opcional?: string ```
Quando opcional elas poderão retornar um valor definido ou undefined

```ts
    interface Product {
        nome?: string; //nome é opcional e pode retornar undefined
    }

```

## strictNullChecks
Sem esta coonfiguração do typescript que por padrão (com o strict ativo) o Typescript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde o null | undefined podem ser retornados

```json
    {
        "compilerOptions":{
            "target": "ESNext",
            "strict": true, //já está incluso essa config no strict
            "strictNullChecks": true
        }
    }
```
## instanceOf 
O Instanceof é um operador do javascript para verificar se um objeto foi instanciado por uma determinada classe , incluíndo classes herdadas

Quando usado no typescript o instanceOf auxilia a exibir as propriedades da classe verificada.

Instanceof não serve para interfaces do typescript. Apenas para classe.

```ts
if(novoProduto instanceof Livro)
    console.log(novoProduto.autor) // após a verificação do instanceof o TS já aplica o autocomplete correto 

```