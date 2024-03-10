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