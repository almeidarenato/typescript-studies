"use strict";
const frase = 'Front End';
const price = 500;
const condi = price > 100;
console.log(typeof frase);
console.log(typeof price);
if (typeof frase === "string")
    console.log("frase é string");
// typeOf é um "type guard"
// string , number e boolean é diferente de String, Number e Boolean.Essas são
// funções construtoras
const frase1 = new String("Front End");
console.log(frase1);
console.log(typeof frase1); //Object
const frase2 = String("Front End");
console.log("frase2", frase2);
console.log(typeof frase2);
