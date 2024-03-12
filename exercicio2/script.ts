const input = document.querySelector('input')
const total = localStorage.getItem("total")
if(total && input)
{
    input.value = total
    calcularGanho(Number(input.value))
}


function calcularGanho(value: number){
    const p = document.querySelector('p')
    if(p !== null)
    p.innerText = `ganho total:${value + 100 - value * 0.2}`
}


function novoTotal(){
    if(input!= null)
    {
        const value = Number(input.value)
        localStorage.setItem("total",String(value))
        calcularGanho(value)
    }
}
input?.addEventListener('keyup',novoTotal)