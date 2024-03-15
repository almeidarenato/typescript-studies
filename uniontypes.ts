let novototal: string | number = 200;
novototal = "4000"

function isNumber(value: string | number){
    if(typeof value === "number"){
        return true;
    } else{
        return false
    }
}

if(isNumber("200")){
    console.log("Não é um número")
}

const button = document.querySelector('button')

button?.click(); // optional chaining - apenas se não for null ou undefined