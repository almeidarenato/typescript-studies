"use strict";
const linkElement = document.getElementById("origamid");
if (linkElement) {
    console.dir(linkElement); // retorna como objeto ao invés de elemento do dom
    // prototype = classe utilizada como construtor ou extendida para criar o objeto
    if (linkElement instanceof HTMLAnchorElement)
        linkElement.href = linkElement.href.replace("http:", "https");
}
