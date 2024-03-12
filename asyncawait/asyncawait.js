"use strict";
const espera1 = fetch('./asyncawait.json');
const espera2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Teste da promise 2");
    }, 2000); // apenas com a Promise o await aguarda o "resolve". 
});
const espera4 = async () => {
    return "Teste";
};
const resultadoFinal = async () => {
    const resultado1 = await (await espera1).json();
    console.log("dados do json:", resultado1);
    const resultado2 = await espera2;
    const resultado4 = await espera4();
    console.log(`${resultado2} e ${resultado4}`);
};
resultadoFinal();
