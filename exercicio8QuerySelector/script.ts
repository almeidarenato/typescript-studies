const links = document.querySelectorAll('.link')

links.forEach((link)=>{
    if(link instanceof HTMLElement){
        mudaEstilo(link)
        console.log(link)
    }
})

function mudaEstilo(link: HTMLElement){
    link.style.border = '1px solid black'
    link.style.color = 'green'
}