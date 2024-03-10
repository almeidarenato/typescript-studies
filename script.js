//@ts-check
const frase = "Front End";
const total = 100.05;
const empresas = ["Apple", "Microsoft"];
console.log(frase.toLowerCase());
//console.log(total.toLowerCase());
// o erro acontece em execução. No typescript não é possível acionar o
// toLowerCase() para um numero
const t = total.toFixed();
console.log(t + 10); // concatenou um numero com uma string
// no typescript isso não ocorreria por ter definido o tipo
empresas.map((empresa) => empresa.toLowerCase());
const body = document.body;
const button = document.querySelector("button");
if (button)
    button.click();
body.style.background = "#000";
