"use strict";
const espera1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Teste da promise 1");
    }, 900);
});
const espera2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Teste da promise 2");
    }, 400);
});
const espera4 = async () => {
    return "Teste";
};
const espera3 = async () => {
    const resultado1 = await espera1;
    const resultado2 = await espera2;
    const resultado4 = await espera4();
    console.log(`${resultado1} e ${resultado2} e ${resultado4}`);
};
espera3();
